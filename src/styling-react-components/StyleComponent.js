import React from "react";
import "../styles.css"; // Importing the CSS file for external styles
import compStyles from  "./StyleComponent.module.css"; // Importing the CSS module for scoped styles
import styles from "../appStyles.module.css"; // Importing CSS module for scoped styles
function StyleComponent(props) {
  return (
    <div>
      {/* This is a simple React component that applies inline styles to an h1 element
         The styles are defined using a JavaScript object
         The object contains properties that correspond to CSS properties */}
      <h1>Inline Styles</h1>
      <h1 style={{ color: "blue", fontSize: "24px" }}>Hello, World!</h1>

      {/* Conditional Styling */}
      <h1>Conditional Styles</h1>
      <h1 className={props.primary ? compStyles.primary : ""}>Hello, React</h1>

      {/* Multiple Classes */}
      <h1>Multiple Styles</h1>
      <h1 className={`${compStyles.class1} ${compStyles.class2}`}>Hello, React World!</h1>

      {/* External Css Style Sheets */}
      <h1>External Styles</h1>
      <h1 className="external-style">Hello, World!</h1>

      {/* CSS Modules */}
      <h1>CSS Modules</h1>
      <h1 className={styles.success}>Hello, React!</h1>
    </div>
  );
}

export default StyleComponent;
