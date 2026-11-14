using UnrealBuildTool;
using System.Collections.Generic;

public class Cricket27EditorTarget : TargetRules
{
	public Cricket27EditorTarget(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.Latest;
		IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
		ExtraModuleNames.Add("Cricket27");
	}
}
