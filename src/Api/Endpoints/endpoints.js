
export const endpoints = {
    auth: {
      signup: "/user/signup",
      login: "user/signin",
      profileDetails: "/user/profile-details",
    },
    cms: {
      list: "/product/list",
      create: "/product/create",
      details:"/product/detail",
      update:"/product/update",
      remove:"/product/remove"
    },
  };
  
  export const sucessNotificationEndPoints = [
    // endpoints.auth.signup,
    endpoints.auth.signup,
    endpoints.auth.login,
    endpoints.auth.profileDetails,
    endpoints.cms.create,
    endpoints.cms.list,
    endpoints.cms.details,
    endpoints.cms.update,
    endpoints.cms.remove,
  ];
  