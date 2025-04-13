// src/plugins/targetBlank.ts

import { visit } from "unist-util-visit";

export const targetBlank = ({ domain = "" } = {}) => {
  return tree => {
    visit(tree, "element", e => {
      if (
        e.tagName === "a" &&
        e.properties?.href &&
        e.properties.href.toString().startsWith("http") &&
        !e.properties.href.toString().includes(domain)
      ) {
        e.properties["target"] = "_blank";
      }
    });
  };
};
