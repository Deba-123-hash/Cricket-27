import { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { UIContext } from './uiState';

/**
 * CRICKET27 — Global UI State Provider
 * Phase 20 Component Architecture & State Management
 *
 * Coordinates shared cross-component UI state:
 * - Mobile navigation menu state
 * - Active modal identifier & modal payload data
 * - Global navbar scroll threshold state
 */
export const UIProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  // Mobile menu handlers
  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen((prev) => !prev), []);

  // Modal handlers
  const openModal = useCallback((modalId, data = null) => {
    setActiveModal(modalId);
    setModalData(data);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalData(null);
  }, []);

  // Context value memoization
  const value = useMemo(
    () => ({
      isMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
      activeModal,
      modalData,
      openModal,
      closeModal,
      isNavScrolled,
      setIsNavScrolled,
    }),
    [
      isMobileMenuOpen,
      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
      activeModal,
      modalData,
      openModal,
      closeModal,
      isNavScrolled,
    ]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UIProvider;
