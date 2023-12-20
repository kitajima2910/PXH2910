﻿function GetPluginSettings()
{
	return {
		"name":			"Tilt to arrow key",
		"id":			"Rex_Tilt2ArrowKey",
		"version":		"0.1",   		
		"description":	"Get arrow key event from tilt's beta and gamma input.",
		"author":		"Rex.Rainbow",
		"help url":		"https://rexrainbow.github.io/C2RexDoc/c2rexpluginsACE/plugin_rex_tilt2ArrowKey.html",
		"category":		"Rex - Arrow key",
		"type":			"object",			// not in layout
		"rotatable":	false,
		"flags":		pf_singleglobal
	};
};

//////////////////////////////////////////////////////////////
// Conditions
AddCondition(1, cf_trigger, "On Up arrow pressed", "Pressd", "On Up arrow pressed", 
             "Triggered when Up arrow is pressed.", "OnUPPressed");
AddCondition(2, cf_trigger, "On Down arrow pressed", "Pressd", "On Down arrow pressed", 
             "Triggered when Down arrow is pressed.", "OnDOWNPressed");
AddCondition(3, cf_trigger, "On Left arrow pressed", "Pressd", "On Left arrow pressed", 
             "Triggered when Left arrow is pressed.", "OnLEFTPressed");
AddCondition(4, cf_trigger, "On Right arrow pressed", "Pressd", "On Right arrow pressed", 
             "Triggered when Right arrow is pressed.", "OnRIGHTPressed");
AddCondition(5, cf_trigger, "On any arrow pressed", "Pressd", "On any arrow pressed", 
             "Triggered when any arrow is pressed.", "OnAnyPressed");

AddCondition(11, 0,	"Up arrow is down",	"Is down", "Up arrow is down", 
             "Return true if Up arrow is currently held down.", "IsUPDown");
AddCondition(12, 0,	"Down arrow is down", "Is down", "Down arrow is down", 
             "Return true if Down arrow is currently held down.", "IsDOWNDown");
AddCondition(13, 0,	"Left arrow is down", "Is down", "Left arrow is down", 
             "Return true if Left arrow is currently held down.", "IsLEFTDown");
AddCondition(14, 0,	"Right arrow is down", "Is down", "Right arrow is down", 
             "Return true if Right arrow is currently held down.", "IsRIGHTDown");

AddCondition(21, cf_trigger, "On Up arrow released", "Released", "On Up arrow released", 
             "Triggered when Up arrow is released.", "OnUPReleased");
AddCondition(22, cf_trigger, "On Down arrow released", "Released", "On Down arrow released", 
             "Triggered when Down arrow is released.", "OnDOWNReleased");
AddCondition(23, cf_trigger, "On Left arrow released", "Released", "On Left arrow released", 
             "Triggered when Left arrow is released.", "OnLEFTReleased");
AddCondition(24, cf_trigger, "On Right arrow released", "Released", "On Right arrow released", 
             "Triggered when Right arrow is released.", "OnRIGHTReleased");

//////////////////////////////////////////////////////////////
// Actions
AddComboParamOption("0");
AddComboParamOption("current angle");
AddComboParam("ZERO angle", "ZERO angle of Up-Bottom direction.");
AddComboParamOption("0");
AddComboParamOption("current angle");
AddComboParam("ZERO angle", "ZERO angle of Left-Right direction.");
AddAction(2, 0, "Calibration", "calibration", "Calibration zero angle of Up-Bottom to <i>{0}</i>, zero angle of Left-Right to <i>{1}</i>", 
          "Calibration zero angle.", "Calibration");
AddNumberParam("Sensitivity angle", "Sensitivity angle.");          
AddAction(3, 0, "Set sensitivity angle", "Sensitivity", "Set sensitivity angle to <i>{0}</i>", 
          "Set sensitivity angle of turning direction detection.", "SetSensitivity");
          
//////////////////////////////////////////////////////////////
// Expressions
AddExpression(1, ef_return_number, "Zero of Up-Bottom", "Angle", "ZEROUD", "Get zero of Up-Bottom.");
AddExpression(2, ef_return_number, "Zero of Left-Right", "Angle", "ZEROLR", "Get zero of Left-Right.");
AddExpression(3, ef_return_number, "Rotate angle of Up-Bottom", "Angle", "RotateUD", "Get rotate angle of Up-Bottom.");
AddExpression(4, ef_return_number, "Rotate angle of Left-Right", "Angle", "RotateLR", "Get rotate angle of Left-Right.");
AddExpression(5, ef_return_number, "Sensitivity angle", "Angle", "SensitivityAngle", "Get sensitivity angle of turning direction detection.");


ACESDone();

// Property grid properties for this plugin
var property_list = [
    new cr.Property(ept_combo, "Calibration", "0", "Calibration zero angle.", "0|Current angle"),
    new cr.Property(ept_combo, "Directions", "8 directions", "The number of directions of movement available.", "Up & down|Left & right|4 directions|8 directions"),
    new cr.Property(ept_float, "Sensitivity", 5, "Sensitivity of tilt angle, in degree."),
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function()
{
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
	if (this.properties["Sensitivity"] < 0)
		this.properties["Sensitivity"] = 1;    
}
	
// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function(renderer)
{
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function()
{	
}
