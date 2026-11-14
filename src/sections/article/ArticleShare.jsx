import { useState } from 'react';
import { Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

export const ArticleShare = ({ title, excerpt }) => {
  const [copied, setCopied] = useState(false);
  const { success } = useToast();

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return 'https://cricket27.com';
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      success('Article link copied to clipboard!');
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || 'CRICKET27 Story',
          text: excerpt || 'Read this story on CRICKET27',
          url: getShareUrl(),
        });
      } catch {
        // Share cancelled or dismissed
      }
    } else {
      handleCopy();
    }
  };

  const shareUrl = encodeURIComponent(getShareUrl());
  const shareText = encodeURIComponent(`${title} — CRICKET27`);

  const shareLinks = [
    {
      name: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
      icon: MessageCircle,
      ariaLabel: 'Share article on WhatsApp',
    },
    {
      name: 'X (Twitter)',
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      icon: null,
      customIconText: 'X',
      ariaLabel: 'Share article on X (formerly Twitter)',
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: null,
      customIconText: 'fb',
      ariaLabel: 'Share article on Facebook',
    },
  ];

  return (
    <div className="p-5 rounded-brand-lg bg-slate-card/70 border border-slate">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-heading font-black uppercase text-warm-white tracking-wider flex items-center gap-1.5">
          <Share2 className="w-3.5 h-3.5 text-lime" />
          <span>Share Story</span>
        </h4>
        {copied && (
          <span className="text-[11px] font-mono text-lime flex items-center gap-1 animate-pulse">
            <Check className="w-3 h-3" />
            Copied!
          </span>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`p-2.5 rounded-brand flex flex-col items-center justify-center gap-1 text-[11px] font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
            copied
              ? 'bg-lime text-midnight border border-lime'
              : 'bg-midnight text-warm-white border border-slate hover:border-lime hover:text-lime'
          }`}
          aria-label="Copy article link to clipboard"
          title="Copy Link"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span className="text-[10px] uppercase font-bold">{copied ? 'Copied' : 'Copy'}</span>
        </button>

        {/* WhatsApp Share */}
        <a
          href={shareLinks[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-brand bg-midnight border border-slate hover:border-lime text-warm-white hover:text-lime transition-colors flex flex-col items-center justify-center gap-1 text-[11px] font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label={shareLinks[0].ariaLabel}
          title="Share via WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] uppercase font-bold">Chat</span>
        </a>

        {/* X (Twitter) Share */}
        <a
          href={shareLinks[1].url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-brand bg-midnight border border-slate hover:border-lime text-warm-white hover:text-lime transition-colors flex flex-col items-center justify-center gap-1 text-[11px] font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label={shareLinks[1].ariaLabel}
          title="Share on X"
        >
          <span className="font-heading font-black text-sm leading-none">𝕏</span>
          <span className="text-[10px] uppercase font-bold">Post</span>
        </a>

        {/* Facebook Share */}
        <a
          href={shareLinks[2].url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-brand bg-midnight border border-slate hover:border-lime text-warm-white hover:text-lime transition-colors flex flex-col items-center justify-center gap-1 text-[11px] font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label={shareLinks[2].ariaLabel}
          title="Share on Facebook"
        >
          <span className="font-heading font-black text-xs leading-none">f</span>
          <span className="text-[10px] uppercase font-bold">Share</span>
        </a>
      </div>

      {/* Optional Native Web Share trigger for mobile */}
      {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="w-full mt-3 py-2 px-3 rounded-brand bg-slate/40 border border-slate/60 hover:border-lime text-warm-white hover:text-lime text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors sm:hidden"
        >
          <Share2 className="w-3.5 h-3.5 text-lime" />
          <span>More Share Options</span>
        </button>
      )}
    </div>
  );
};

export default ArticleShare;
