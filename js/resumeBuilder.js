// var name = "Rob Peckham";
// var role = "Web Developer";

// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
	"name": "Rob Peckham",
	"role": "Web Developer",
	"contacts" : {
		"mobile": "555-555-1234",
		"email": "peckham.rob@gmail.com",
		"github": "BuffaloRob",
		"twitter": "@twitter",
		"location": "Chicago"
	},
	"bioPic": "images/fry.jpg",
	"welcomeMessage": "Thanks for checking me out",
	"skills": ["fucking shit up", "troubleshooting", "nuke stuff"]
};

var education = {
	"schools": [
		{
			"name": "Nuclear Power School",
			"city": "Charleston, SC",
			"Major": "Nuclear Propulsion"
		},
		{
			"name": "Monroe Community College",
			"city": "Rochester, NY",
			"Major": "Engineering"
		},
		{
			"name": "Tidewater Community College",
			"city": "Norfolk, VA",
			"Major": "Business Administration"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end developers course",
			"school": "Udacity",
			"dates": "11/2015 - Present",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Ascent",
			"title": "Critical Facilities Manager",
			"location": "Charlotte, NC",
			"dates": "2/2016 - Present",
			"description": "Manages day-to-day operations of data center supporting critical infastructure"
		},
		{
			"employer": "Ascent",
			"title": "Critical Facilities Technician",
			"location": "Chicago, IL",
			"dates": "7/2013 - 2/2016",
			"description": "Maintained and operated all equipment associated with supporting critical load in data center"
		},
		{
			"employer": "United States Navy",
			"title": "Nuclear Machinist Mate",
			"location": "Norfolk, VA",
			"dates": "7/2001 - 10/2010",
			"description": "Operated and maintained nuclear propulsion equipment "
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "11/2015 - 12/2015",
			"description": "Basic portfolio showcasing some of my pictures",
			// "images": ""
		},
		{
			"title": "Online Resume",
			"dates": "12/2015 - Present",
			"description": "Resume to showcase my Front-end developer skills",
			// "images": ""
		}
	]
}


// var foramattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedMobile = HTMLMobile.replace("%data%", bio.contacts.mobile);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
// var formattedSkills = HTMLskills.replace("%data%", bio.skills);


// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);
// $("#header").append(formattedMobile);
// $("#topContacts").prepend(formattedBioPic);
// $("#topContacts").prepend(formattedWelcomeMsg);
// $("#topContacts").prepend(formattedSkills);