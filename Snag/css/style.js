import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "fontFamily": "'Raleway', sans-serif",
        "background": "#FFF"
    },
    "div": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "span": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "applet": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "object": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "iframe": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h2": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h4": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h5": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "h6": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "pre": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "a": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "textDecoration": "none"
    },
    "abbr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "acronym": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "big": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "cite": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "code": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "del": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dfn": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "em": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "maxWidth": "100%"
    },
    "ins": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "kbd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "q": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "quotes": "none"
    },
    "s": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "samp": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "small": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strike": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "strong": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "sub": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "sup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "var": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "b": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "u": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "i": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dl": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dt": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "dd": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "listStyle": "none"
    },
    "nav ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "nav li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "form": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "label": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "legend": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "caption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tbody": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tfoot": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "thead": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "tr": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "th": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "td": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "article": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "aside": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "canvas": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "details": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "embed": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "figure": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "figcaption": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "footer": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 2,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "background": "#151c27",
        "borderTop": "10px solid #0d131a"
    },
    "header": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "hgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "menu": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "float": "right"
    },
    "nav": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block"
    },
    "output": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ruby": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "section": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -90,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline",
        "display": "block",
        "clear": "both"
    },
    "summary": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "time": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "mark": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "audio": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "video": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "fontSize": "100%",
        "font": "inherit",
        "verticalAlign": "baseline"
    },
    "ul": {
        "listStyle": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "blockquote:before": {
        "content": "none"
    },
    "blockquote:after": {
        "content": "none"
    },
    "q:before": {
        "content": "none"
    },
    "q:after": {
        "content": "none"
    },
    "txt-rt": {
        "textAlign": "right"
    },
    "txt-lt": {
        "textAlign": "left"
    },
    "txt-center": {
        "textAlign": "center"
    },
    "float-rt": {
        "float": "right"
    },
    "float-lt": {
        "float": "left"
    },
    "clear": {
        "clear": "both"
    },
    "pos-relative": {
        "position": "relative"
    },
    "pos-absolute": {
        "position": "absolute"
    },
    "vertical-base": {
        "verticalAlign": "baseline"
    },
    "vertical-top": {
        "verticalAlign": "top"
    },
    "underline": {
        "paddingBottom": 5,
        "borderBottom": "1px solid #eee",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "navvertical ul li": {
        "display": "block"
    },
    "navhorizontal ul li": {
        "display": "inline-block"
    },
    "wrap": {
        "width": "80%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "transition": "all .2s linear",
        "MozTransition": "all .2s linear",
        "WebkitTransition": "all .2s linear",
        "OTransition": "all .2s linear",
        "MsTransition": "all .2s linear"
    },
    "header_top": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "borderBottom": "8px solid #ee5f15",
        "position": "fixed",
        "zIndex": 9,
        "width": "100%",
        "clear": "both",
        "background": "#232d3b"
    },
    "logo": {
        "float": "left"
    },
    "menu li": {
        "display": "inline-block"
    },
    "menu li a": {
        "display": "block",
        "fontSize": 0.8,
        "fontWeight": 600,
        "marginTop": 5,
        "marginRight": 15,
        "marginBottom": 5,
        "marginLeft": 15,
        "color": "#727E8D",
        "WebkitTransition": "all 0.3s ease",
        "MozTransition": "all 0.3s ease",
        "OTransition": "all 0.3s ease",
        "transition": "all 0.3s ease"
    },
    "menu li a:hover": {
        "color": "#FFF"
    },
    "menu lilogin a": {
        "background": "#a3d39c",
        "color": "#FFF",
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "borderBottom": "4px solid #739e6c"
    },
    "menu lilogin a:hover": {
        "background": "#95C08F"
    },
    "menu lilogin a:active": {
        "position": "relative",
        "top": 5
    },
    "loginContainer": {
        "position": "relative"
    },
    "loginContainer a span": {
        "display": "block",
        "paddingTop": 12,
        "paddingRight": 25,
        "paddingBottom": 12,
        "paddingLeft": 25,
        "letterSpacing": 1
    },
    "loginButton": {
        "display": "inline-block",
        "position": "relative",
        "zIndex": 30,
        "cursor": "pointer"
    },
    "loginBox": {
        "position": "absolute",
        "top": 75,
        "right": 10,
        "display": "none",
        "zIndex": 29
    },
    "loginForm:after": {
        "content": "''",
        "position": "absolute",
        "right": 40,
        "top": -10,
        "borderLeft": "10px solid rgba(0, 0, 0, 0)",
        "borderRight": "10px solid rgba(0, 0, 0, 0)",
        "borderBottom": "10px solid #151C27"
    },
    "loginForm": {
        "width": 250,
        "borderRadius": "3px 0 3px 3px",
        "MozBorderRadius": "3px 0 3px 3px",
        "marginTop": 0,
        "background": "#151C27",
        "border": "1px solid #151C27"
    },
    "loginForm fieldset": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "display": "block",
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "fieldsetbody": {
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "loginForm checkbox": {
        "width": "auto",
        "marginTop": 1,
        "marginRight": 6,
        "marginBottom": 0,
        "marginLeft": 0,
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "Margin": "-3px 9px 0 0"
    },
    "body label": {
        "color": "#E0E0E0",
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "display": "block",
        "float": "left",
        "fontSize": 0.8
    },
    "loginForm body fieldset label": {
        "display": "block",
        "float": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "body label i": {
        "color": "#A0A0A0",
        "textShadow": "1px 1px #000",
        "fontWeight": 500
    },
    "loginForm input[type=\"text\"]": {
        "width": "92%",
        "border": "1px solid #DADADA",
        "color": "#222",
        "background": "#FFF",
        "paddingTop": 3,
        "paddingRight": 8,
        "paddingBottom": 3,
        "paddingLeft": 8,
        "fontSize": 0.85,
        "WebkitApperance": "none",
        "fontFamily": "'Open Sans', sans-serif"
    },
    "loginForm input[type=\"password\"]": {
        "width": "92%",
        "border": "1px solid #DADADA",
        "color": "#222",
        "background": "#FFF",
        "paddingTop": 3,
        "paddingRight": 8,
        "paddingBottom": 3,
        "paddingLeft": 8,
        "fontSize": 0.85,
        "WebkitApperance": "none",
        "fontFamily": "'Open Sans', sans-serif"
    },
    "loginForm login": {
        "width": "auto",
        "fontFamily": "'Open Sans', sans-serif",
        "float": "left",
        "background": "#7ACCC8",
        "borderWidth": "0 0 3px 0",
        "borderStyle": "solid",
        "borderColor": "#45A39E",
        "color": "#fff",
        "fontSize": 0.85,
        "paddingTop": 8,
        "paddingRight": 20,
        "paddingBottom": 8,
        "paddingLeft": 20,
        "boxShadow": "none",
        "MozBoxShadow": "none",
        "WebkitBoxShadow": "none",
        "WebkitAppearance": "none",
        "marginTop": 0,
        "marginRight": 12,
        "marginBottom": 0,
        "marginLeft": 0,
        "cursor": "pointer",
        "Padding": "7px 2px 8px 2px",
        "transition": "all .5s",
        "WebkitTransition": "all .5s",
        "MozTransition": "all .5s",
        "OTransition": "all .5s",
        "MozBorderRadius": 2,
        "WebkitBorderRadius": 2,
        "OBorderRadius": 2
    },
    "loginForm login:hover": {
        "background": "#60C2BD"
    },
    "loginForm span": {
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "loginForm span a": {
        "color": "#D1D1D1",
        "textShadow": "1px 1px #000",
        "fontSize": 0.8,
        "fontWeight": 500,
        "background": "none",
        "border": "none",
        "boxShadow": "none"
    },
    "loginForm span a:hover": {
        "color": "#FFF",
        "textDecoration": "underline"
    },
    "input:focus": {
        "outline": "none"
    },
    "content_top": {
        "position": "relative",
        "background": "linear-gradient(to bottom,  #ff742c 0%,#ff742c 0%,#ff8039 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff742c', endColorstr='#ff8039',GradientType=0 )",
        "borderBottom": "30px solid #ff742c"
    },
    "banner_desc": {
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 3,
        "paddingLeft": 0,
        "textAlign": "center",
        "color": "#FFF"
    },
    "wmuSlider": {
        "position": "relative",
        "overflow": "hidden"
    },
    "wmuSlider wmuSliderWrapper article": {
        "position": "relative",
        "textAlign": "center"
    },
    "wmuSliderWrapper article p": {
        "fontSize": 3,
        "fontWeight": 200,
        "paddingTop": 15,
        "paddingRight": "15%",
        "paddingBottom": 15,
        "paddingLeft": "15%"
    },
    "wmuSlider wmuSliderWrapper article img": {
        "maxWidth": "100%",
        "width": "auto",
        "height": "auto",
        "display": "block",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "wmuGallery wmuGalleryImage": {
        "position": "relative",
        "textAlign": "center",
        "marginBottom": 10
    },
    "wmuGallery wmuGalleryImage img": {
        "maxWidth": "100%",
        "width": "auto",
        "height": "auto"
    },
    "wmuSliderPrev": {
        "position": "absolute",
        "width": 70,
        "height": 85,
        "textIndent": -9999,
        "background": "url(../images/sprites.png) no-repeat",
        "top": "50%",
        "marginTop": -40,
        "cursor": "pointer",
        "backgroundPosition": "-275px -170px",
        "left": 20
    },
    "wmuSliderNext": {
        "position": "absolute",
        "width": 70,
        "height": 85,
        "textIndent": -9999,
        "background": "url(../images/sprites.png) no-repeat",
        "top": "50%",
        "marginTop": -40,
        "cursor": "pointer",
        "backgroundPosition": "-352px -170px",
        "right": 20
    },
    "dropdown-buttons": {
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "flat": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out",
        "position": "relative",
        "cursor": "pointer",
        "fontWeight": 600,
        "background": "#FFF",
        "color": "#898989",
        "borderRadius": 5,
        "WebkitBorderRadius": 5,
        "MozBorderRadius": 5,
        "OBorderRadius": 5,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "userSelect": "none",
        "borderBottom": "2px solid #CC6128"
    },
    "flat div": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out",
        "position": "absolute",
        "height": 0,
        "left": 0,
        "right": 0,
        "top": "100%",
        "marginTop": 1,
        "background": "#7ACCC8",
        "overflow": "hidden",
        "opacity": 0,
        "color": "#FFF",
        "borderRadius": 5,
        "WebkitBorderRadius": 5,
        "MozBorderRadius": 5,
        "OBorderRadius": 5
    },
    "flat li": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out",
        "display": "block",
        "fontSize": 1,
        "fontWeight": 400,
        "fontFamily": "'Open Sans', sans-serif",
        "paddingTop": 6,
        "paddingRight": 10,
        "paddingBottom": 6,
        "paddingLeft": 10,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textAlign": "left",
        "listStyle": "none"
    },
    "flat div::after": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out"
    },
    "flat carat": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out"
    },
    "flat carat:after": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out"
    },
    "flat selected::after": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out",
        "WebkitPointerEvents": "none",
        "MozPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "content": "''",
        "position": "absolute",
        "right": 0,
        "top": 0,
        "bottom": 0,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "width": 20,
        "height": 20,
        "background": "#7accc8 url(../images/sprites.png) no-repeat 9px  11px",
        "borderRadius": "0 5px 5px 0",
        "WebkitBorderRadius": "0 5px 5px 0",
        "MozBorderRadius": "0 5px 5px 0",
        "OBorderRadius": "0 5px 5px 0"
    },
    "flat:after": {
        "WebkitTransition": "all 150ms ease-in-out",
        "MozTransition": "all 150ms ease-in-out",
        "MsTransition": "all 150ms ease-in-out",
        "transition": "all 150ms ease-in-out"
    },
    "flatscrollable div::after": {
        "WebkitPointerEvents": "none",
        "MozPointerEvents": "none",
        "MsPointerEvents": "none",
        "pointerEvents": "none",
        "content": "''",
        "position": "absolute",
        "left": 0,
        "right": 0,
        "bottom": 0,
        "height": 50
    },
    "flatopen": {
        "zIndex": 2
    },
    "flat:hover": {
        "color": "#666"
    },
    "flatfocus": {
        "color": "#666"
    },
    "flat old": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "height": 0,
        "width": 0,
        "overflow": "hidden"
    },
    "flat select": {
        "position": "absolute",
        "left": 0,
        "top": 0
    },
    "flattouch select": {
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "opacity": 0
    },
    "flat selected": {
        "color": "#898989",
        "display": "block",
        "fontSize": 1,
        "fontWeight": 600,
        "fontFamily": "'Open Sans', sans-serif",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 18,
        "paddingLeft": 50,
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "textAlign": "left",
        "background": "url(../images/chart.png) no-repeat 15px 14px"
    },
    "flat selected:hover": {
        "color": "#666"
    },
    "flat:hover selected::after": {
        "backgroundColor": "#48BEB9"
    },
    "flatfocus selected::after": {
        "backgroundColor": "#48BEB9"
    },
    "flat:hover div": {},
    "flatopen div": {
        "opacity": 1,
        "zIndex": 2
    },
    "flatscrollablebottom div::after": {
        "opacity": 0
    },
    "flat ul": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "height": "100%",
        "width": "100%",
        "listStyle": "none",
        "overflow": "hidden",
        "borderRadius": 5,
        "WebkitBorderRadius": 5,
        "MozBorderRadius": 5,
        "OBorderRadius": 5
    },
    "flatscrollableopen ul": {
        "overflowY": "auto"
    },
    "flat li:last-child": {
        "borderBottom": 0
    },
    "flat li:hover": {
        "backgroundColor": "#48BEB9"
    },
    "flat lifocus": {
        "background": "#48BEB9",
        "position": "relative",
        "zIndex": 3,
        "color": "#FFF"
    },
    "flat liactive": {
        "backgroundColor": "#48BEB9",
        "color": "#fff"
    },
    "test": {
        "display": "inline-block",
        "color": "#FFF",
        "fontSize": 1.2,
        "fontWeight": 400,
        "background": "#7accc8",
        "paddingTop": 20,
        "paddingRight": 60,
        "paddingBottom": 20,
        "paddingLeft": 60,
        "borderBottom": "4px solid #45A39E",
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "WebkitTransition": "all 0.3s ease",
        "MozTransition": "all 0.3s ease",
        "OTransition": "all 0.3s ease",
        "transition": "all 0.3s ease"
    },
    "quote_button a:hover": {
        "background": "#60C2BD"
    },
    "quote_button a:active": {
        "position": "relative",
        "top": 5
    },
    "comment_icons": {
        "display": "inline-block",
        "position": "absolute",
        "top": "50%",
        "left": 10
    },
    "comment_icons li a": {
        "display": "block",
        "width": 35,
        "height": 35,
        "paddingTop": 18,
        "paddingRight": 18,
        "paddingBottom": 18,
        "paddingLeft": 18,
        "WebkitTransition": "all 0.3s ease",
        "MozTransition": "all 0.3s ease",
        "OTransition": "all 0.3s ease",
        "transition": "all 0.3s ease"
    },
    "comment_icons li acomments": {
        "background": "#36AAA4 url(../images/sprites.png) no-repeat -125px 13px",
        "borderRadius": "3px 3px 0px 0px"
    },
    "comment_icons li acomments:hover": {
        "backgroundColor": "#229993"
    },
    "comment_icons li aemail": {
        "background": "#80d3cf url(../images/sprites.png) no-repeat -178px 11px"
    },
    "comment_icons li aemail:hover": {
        "backgroundColor": "#5FC4BF"
    },
    "comment_icons li alike": {
        "background": "#5dbab5 url(../images/sprites.png) no-repeat -231px 10px",
        "borderRadius": "0px 0px 3px 3px"
    },
    "comment_icons li alike:hover": {
        "backgroundColor": "#55AAA5"
    },
    "comment_icons li a span": {
        "width": 120,
        "height": "auto",
        "lineHeight": 0,
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "top": 1,
        "left": 6,
        "marginLeft": 0,
        "fontFamily": "Verdana, Geneva, Arial, Helvetica, sans-serif",
        "fontWeight": 400,
        "fontSize": 0.8,
        "color": "#FFF",
        "textShadow": "1px 1px 1px rgba(0, 0, 0, 0.1)",
        "textAlign": "center",
        "border": "3px solid #232D3B",
        "background": "#232D3B",
        "textIndent": 0,
        "position": "absolute",
        "pointerEvents": "none",
        "opacity": 0,
        "boxShadow": "1px 1px 2px rgba(0,0,0,0.1)",
        "WebkitTransition": "all 0.3s ease-in-out",
        "MozTransition": "all 0.3s ease-in-out",
        "OTransition": "all 0.3s ease-in-out",
        "MsTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out"
    },
    "comment_icons li a span:before": {
        "content": "''",
        "position": "absolute",
        "bottom": 9,
        "left": -12,
        "width": 0,
        "height": 0,
        "borderBottom": "10px solid transparent",
        "borderRight": "10px solid #232D3B",
        "borderTop": "10px solid transparent"
    },
    "comment_icons li a:hover span": {
        "opacity": 0.9,
        "left": 100
    },
    "comment_icons li acomments span": {
        "top": 1
    },
    "comment_icons li aemail span": {
        "top": 6.5
    },
    "comment_icons li alike span": {
        "top": 12
    },
    "about_desc": {
        "background": "#f6f5f2",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "group:before": {
        "content": "",
        "display": "table"
    },
    "group:after": {
        "content": "",
        "display": "table",
        "clear": "both"
    },
    "group": {
        "zoom": 1
    },
    "col_1_of_2": {
        "display": "block",
        "float": "left",
        "marginTop": "1%",
        "marginRight": 0,
        "marginBottom": "1%",
        "marginLeft": "1.6%"
    },
    "col_1_of_2:first-child": {
        "marginLeft": 0
    },
    "span_1_of_2": {
        "width": "46.2%",
        "paddingTop": "1.5%",
        "paddingRight": "1.5%",
        "paddingBottom": "1.5%",
        "paddingLeft": "1.5%"
    },
    "span_1_of_2  h3": {
        "color": "#232d3b",
        "fontSize": 1.8,
        "marginBottom": 10
    },
    "span_1_of_2  p": {
        "fontSize": 0.85,
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "color": "#8F8F8F",
        "lineHeight": 2,
        "fontFamily": "'Open Sans', sans-serif"
    },
    "span_1_of_2  p span": {
        "color": "#ff742c"
    },
    "features": {
        "textAlign": "center",
        "paddingTop": 6
    },
    "features h2": {
        "marginBottom": 3,
        "color": "#232D3B",
        "fontSize": 2.5
    },
    "features li": {
        "display": "inline-block",
        "marginLeft": 20
    },
    "features li:first-child": {
        "marginLeft": 0
    },
    "features li a": {
        "display": "block",
        "paddingTop": 50,
        "paddingRight": 60,
        "paddingBottom": 50,
        "paddingLeft": 60,
        "borderRadius": 5
    },
    "features li a i": {
        "width": 90,
        "height": 90,
        "display": "block",
        "background": "url(../images/sprites.png) no-repeat"
    },
    "features li acloud_icon": {
        "backgroundColor": "#232d3b",
        "borderBottom": "5px solid #05080e"
    },
    "features li a icloud_icon": {
        "backgroundPosition": "-6px -56px"
    },
    "features li across": {
        "backgroundColor": "#7accc8",
        "borderBottom": "5px solid #3aa39d"
    },
    "features li a icross": {
        "backgroundPosition": "-115px -52px"
    },
    "features li abubble": {
        "backgroundColor": "#a3d39c",
        "borderBottom": "5px solid #68af5f"
    },
    "features li a ibubble": {
        "backgroundPosition": "-222px -57px"
    },
    "features li aright_arrow": {
        "backgroundColor": "#ff742c",
        "borderBottom": "5px solid #ff4712"
    },
    "features li a iright_arrow": {
        "backgroundPosition": "-327px -56px"
    },
    "ui-slider-tabs": {
        "marginBottom": -8
    },
    "ui-slider-tabs-list-wrapper": {
        "position": "relative",
        "width": "100%",
        "fontFamily": "Arial,sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ui-slider-tabs-list": {
        "position": "relative",
        "left": "23%"
    },
    "ui-slider-tabs-list-wrapperbottom": {
        "marginTop": -1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ui-slider-tabs-list-container": {
        "overflow": "visible"
    },
    "ui-slider-tabs-list liselected": {
        "position": "relative",
        "top": -5
    },
    "ui-slider-tabs-list liselected a": {
        "cursor": "default",
        "color": "#000"
    },
    "ui-slider-tabs-content-container": {
        "position": "relative",
        "zIndex": 1,
        "overflow": "hidden",
        "top": -8,
        "background": "#5DBAB5",
        "paddingBottom": 5
    },
    "ui-slider-tab-content": {
        "position": "absolute",
        "display": "none",
        "top": 0,
        "left": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ui-slider-tabs-indicator-container": {
        "position": "absolute",
        "bottom": 3,
        "left": 0,
        "width": "100%",
        "textAlign": "center"
    },
    "ui-slider-tabs-indicator": {
        "display": "inline-block",
        "width": 15,
        "height": 15,
        "background": "#1f6e6a",
        "boxShadow": "1px 0px 0px rgba(221, 221, 221, 0.59)",
        "WebkitBoxShadow": "1px 0px 0px rgba(221, 221, 221, 0.59)",
        "MozBoxShadow": "1px 0px 0px rgba(221, 221, 221, 0.59)",
        "OBoxShadow": "1px 0px 0px rgba(221, 221, 221, 0.59)",
        "textIndent": -9999,
        "border": 0,
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "borderRadius": 0.5,
        "WebkitBorderRadius": 0.5,
        "MozBorderRadius": 0.5,
        "OBorderRadius": 0.5,
        "cursor": "pointer"
    },
    "ui-slider-tabs-indicatorselected": {
        "background": "#3e948f"
    },
    "ui-slider-tabs-leftPanelArrow": {
        "position": "absolute",
        "left": 0,
        "width": 30,
        "height": 35,
        "backgroundImage": "url(\"../images/leftPanelArrow.png\")",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center center",
        "cursor": "pointer",
        "opacity": 0.5,
        "MozOpacity": 0.5,
        "filter": "alpha(opacity=5)"
    },
    "ui-slider-tabs-rightPanelArrow": {
        "position": "absolute",
        "right": 0,
        "width": 30,
        "height": 35,
        "backgroundImage": "url(\"../images/rightPanelArrow.png')",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center center",
        "cursor": "pointer",
        "opacity": 0.5,
        "MozOpacity": 0.5,
        "filter": "alpha(opacity=5)"
    },
    "ui-slider-tabs-rightPanelArrowshowOnHover": {
        "opacity": 0,
        "display": "none"
    },
    "ui-slider-tabs-leftPanelArrowshowOnHover": {
        "opacity": 0,
        "display": "none"
    },
    "ui-slider-tabs-content-container:hover ui-slider-tabs-rightPanelArrowshowOnHover": {
        "opacity": 0.5,
        "display": "inline-block"
    },
    "ui-slider-tabs-content-container:hover ui-slider-tabs-leftPanelArrowshowOnHover": {
        "opacity": 0.5,
        "display": "inline-block"
    },
    "ui-slider-tabs-content-container ui-slider-tabs-rightPanelArrow:hover": {
        "opacity": 1
    },
    "ui-slider-tabs-content-container ui-slider-tabs-leftPanelArrow:hover": {
        "opacity": 1
    },
    "ui-slider-tabs-content-container ui-slider-tabs-rightPanelArrowshowOnHover:hover": {
        "opacity": 1
    },
    "ui-slider-tabs-content-container ui-slider-tabs-leftPanelArrowshowOnHover:hover": {
        "opacity": 1
    },
    "footer p": {
        "color": "#727E8D"
    },
    "footer_logo img": {
        "marginTop": 1
    },
    "search_box": {
        "float": "left",
        "background": "#080c11",
        "position": "relative",
        "borderRadius": 3,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "OBorderRadius": 3,
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "width": "90%"
    },
    "search_box form input[type=\"text\"]": {
        "border": "none",
        "outline": "none",
        "background": "none",
        "fontSize": 1.1,
        "color": "#FFF",
        "width": "80%",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 6,
        "paddingLeft": 15,
        "WebkitAppearance": "none",
        "fontFamily": "'Open Sans', sans-serif",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "search_box form input[type=\"submit\"]": {
        "border": "none",
        "outline": "none",
        "cursor": "pointer",
        "background": "url(../images/sprites.png) no-repeat -195px -6px",
        "float": "right",
        "width": 36,
        "height": 36
    },
    "social_icons": {
        "marginTop": 20
    },
    "social_icons li": {
        "display": "inline-block",
        "marginLeft": 15
    },
    "social_icons li:first-child": {
        "marginLeft": 0
    },
    "social_icons li a": {
        "width": 32,
        "height": 32,
        "display": "block",
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12,
        "borderRadius": "0px 0px 3px 3px",
        "WebkitTransition": "all 0.3s ease-in-out",
        "MozTransition": "all 0.3s ease-in-out",
        "OTransition": "all 0.3s ease-in-out",
        "transition": "all 0.3s ease-in-out",
        "background": "url(../images/sprites.png) no-repeat"
    },
    "social_icons li a:hover": {
        "position": "relative",
        "top": 2
    },
    "social_icons li arss": {
        "backgroundPosition": "-10px -150px",
        "backgroundColor": "#ffaa16",
        "borderBottom": "3px solid #d38600"
    },
    "social_icons li arss:hover": {
        "backgroundColor": "#F89E00"
    },
    "social_icons li adribble": {
        "backgroundPosition": "-57px -150px",
        "backgroundColor": "#ec5b95",
        "borderBottom": "3px solid #d30054"
    },
    "social_icons li adribble:hover": {
        "backgroundColor": "#E74385"
    },
    "social_icons li atwitter": {
        "backgroundPosition": "-108px -150px",
        "backgroundColor": "#00aeef",
        "borderBottom": "3px solid #0081b1"
    },
    "social_icons li atwitter:hover": {
        "backgroundColor": "#009FDB"
    },
    "social_icons li afacebook": {
        "backgroundPosition": "-175px -148px",
        "backgroundColor": "#0054a6",
        "borderBottom": "3px solid #003a72"
    },
    "social_icons li afacebook:hover": {
        "backgroundColor": "#004D99"
    },
    "copy-right": {
        "textAlign": "center",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 1,
        "paddingLeft": 0,
        "background": "#131A25",
        "position": "relative"
    },
    "copy-right p": {
        "color": "#727E8D",
        "fontSize": 0.85,
        "lineHeight": 1.8
    },
    "copy-right p span": {
        "color": "#6ec5ea"
    },
    "copy-right p a": {
        "color": "#FF742C",
        "WebkitTransition": "all 0.3s ease-out",
        "MozTransition": "all 0.3s ease-out",
        "MsTransition": "all 0.3s ease-out",
        "OTransition": "all 0.3s ease-out",
        "transition": "all 0.3s ease-out"
    },
    "copy-right p a:hover": {
        "color": "#FFF",
        "textDecoration": "underline"
    }
});