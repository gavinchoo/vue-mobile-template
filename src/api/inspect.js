import request from "@/utils/request";

export function inspectTypes(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function getToken(data) {
  return request({
    url: "/api/user/login",
    method: "post",
    data
  });
}