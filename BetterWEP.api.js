var NaviWEPApi = function(url) {
	var baseUrl = "";

	var PROJECTS_SEARCH_PAGE = "/registration/reg_activity_project_search.asp";

	var init = function(url) {
		this.baseUrl = url;
	};

	var getProjectsList: function(keyword, pageNumber) {
		var page = this.getNaviWEPProjectsPage(keyword, pageNumber);

		var projects = this.getProjectsFromNaviWEPPage(page);

		if(this.naviWEPProjectsPageHasNext(page)) {
			projects.concat(this.getProjectsList(keyword, pageNumber + 1));
		}

		return projects;
	};

	var getNaviWEPProjectsPage: function(keyword, pageNumber) {
		var url = this.baseUrl + this.PROJECTS_SEARCH_PAGE;
		$.post(url, {ProjectIndex:keyword, DisplayPage:pageNumber}).done(function(data) {
			console.log(data);
		});
	};

	var naviWEPProjectsPageHasNext: function(page) {

	};

	var getProjectsFromNaviWEPPage: function(page) {

	};


	return {
		init: function(url) {
			this.init(url);
		},
		searchProjects: function(keyword) {
			this.getProjectsList(keyword, 1);
		},
		addProject: function(project) {

		}
	};
};