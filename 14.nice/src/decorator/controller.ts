import router from "../router";
import { RequestHandler } from "express";
import { Methods } from "./request";

export function controller(root: string) {
  return function (target: new (...args: any[]) => any) {
    // console.log("controller target = ", target.prototype);
    for (let key in target.prototype) {
      // console.log("key = ", key);
      const path: string = Reflect.getMetadata("path", target.prototype, key);
      const method: Methods = Reflect.getMetadata("method", target.prototype, key);
      const middleware: RequestHandler = Reflect.getMetadata("middleware", target.prototype, key);

      const handler = target.prototype[key];

      if (path && method) {
        // router.get(path, handler);
        // router.post(path, handler);
        const fullPath = root === "/" ? path : `${root}${path}`;
        if (middleware) {
          router[method](fullPath, middleware, handler);
        } else {
          router[method](fullPath, handler);
        }
      }
    }
  };
}
