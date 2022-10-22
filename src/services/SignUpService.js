import ApiCaller from "@/assets/helpers/apiCaller";
import URLs from "@/constants/URLs";

export const CheckUserService = (postData) => {
    return ApiCaller({
      method:'post',
      url: URLs.api_base_url+URLs.api_checkUser,
      data: postData,
      headers: {"Access-Control-Allow-Origin": "*"}
    });
  };
