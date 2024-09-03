class AppURL{
  static ImageStorageURL = "http://127.0.0.1:8000/storage/"
  static BaseURL = "http://127.0.0.1:8000/api"
     static VisitorDetails = this.BaseURL+"/getvisitor"
     static PostContact = this.BaseURL+"/postcontact"
     static AboutInfo = this.BaseURL+"/aboutinfo"
     static AboutValues = this.BaseURL+"/aboutvalues"
     static FuelingBrand = this.BaseURL+"/fuelingbrand"
     static WhatWeDo = this.BaseURL+"/whatwedo"
     static TeamMembers = this.BaseURL+"/team-members"
     static AllServices = this.BaseURL+"/allservices"
     static UserLogin = this.BaseURL+"/login"
     static UserData = this.BaseURL+"/user"
     static UserRegister = this.BaseURL+"/register"
     static Strategy = this.BaseURL+"/strategy"
     static StrategySub = this.BaseURL+"/strategysub"
     static StrategyDetails = this.BaseURL+"/strategydetails"
     static AddServices = this.BaseURL+"/services"
     static EditServices = this.BaseURL+"/servicesupdate/"
     static DisplayServicesOnEdit = this.BaseURL+"/services/"
     static DeleteServices = this.BaseURL+"/servicesdelete/"
     static picStorage = this.ImageStorageURL

     static ServicesAddSection1 = this.BaseURL+"/addsubservices"
     
     static AddTeamMember = this.BaseURL+"/addteammembers"
}

export default AppURL;
