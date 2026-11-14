using UnrealBuildTool;
using System.Collections.Generic;

public class Cricket27Target : TargetRules
{
	public Cricket27Target(TargetInfo Target) : base(Target)
	{
		Type = TargetType.Game;
		DefaultBuildSettings = BuildSettingsVersion.Latest;
		IncludeOrderVersion = EngineIncludeOrderVersion.Latest;
		ExtraModuleNames.Add("Cricket27");
	}
}
