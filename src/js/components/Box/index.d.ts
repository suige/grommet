import * as React from "react";

export interface BoxProps {
  a11yTitle?: string;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  alignContent?: "start" | "center" | "end" | "between" | "around" | "stretch";
  alignSelf?: "start" | "center" | "end" | "stretch";
  animation?: "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut" | {type: "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut",delay: number,duration: number,size: "xsmall" | "small" | "medium" | "large" | "xlarge"} | "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut" | {type: "fadeIn" | "fadeOut" | "jiggle" | "pulse" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "zoomIn" | "zoomOut",delay: number,duration: number,size: "xsmall" | "small" | "medium" | "large" | "xlarge"}[];
  background?: string | {color: string,dark: boolean | string,image: string,position: string,opacity: "weak" | "medium" | "strong" | boolean,light: string};
  basis?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "full" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4" | "auto" | string;
  border?: boolean | "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all" | {color: string | {dark: string,light: string},side: "top" | "left" | "bottom" | "right" | "horizontal" | "vertical" | "all",size: "xsmall" | "small" | "medium" | "large" | "xlarge" | string};
  direction?: "row" | "column" | "row-responsive";
  elevation?: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
  flex?: "grow" | "shrink" | "true" | "false";
  fill?: "horizontal" | "vertical" | "true" | "false";
  gap?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
  gridArea?: string;
  height?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
  justify?: "start" | "center" | "between" | "end";
  margin?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | {bottom: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,horizontal: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,left: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,right: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,top: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string,vertical: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | string} | string;
  overflow?: "auto" | "hidden" | "scroll" | "visible";
  pad?: "none" | "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge" | {bottom: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge",horizontal: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge",left: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge",right: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge",top: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge",vertical: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge"} | string;
  responsive?: boolean;
  round?: boolean | "xsmall" | "small" | "medium" | "large" | "xlarge" | "full" | string | {corner: "top" | "left" | "bottom" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right",size: "xsmall" | "small" | "medium" | "large" | "xlarge" | string};
  tag?: string;
  width?: "xsmall" | "small" | "medium" | "large" | "xlarge" | string;
  wrap?: boolean;
}

declare const Box: React.ComponentType<BoxProps>;

export { Box };