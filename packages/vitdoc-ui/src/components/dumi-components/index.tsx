import { Result } from "antd";
import chunk from "lodash/chunk";
import unzip from "lodash/unzip";
import React, { useContext } from "react";
import { VitDocMarkdownContext } from "../../context";
import { useMarkdown } from "../../hooks/loaders";
import { ComponentBlock } from "../component-area";

import "./index.scss";

export function DumiPage(props) {
  return props.children;
}

export function DumiDemo(props) {
  const id = props.demo.id;

  const markdowns = useMarkdown();

  const { renderers } = useContext(VitDocMarkdownContext)!;
  const CodeBlock = renderers?.["code-block"] ?? ComponentBlock;

  if (!markdowns) {
    return null;
  }

  const { pathHash, getModule, error } = markdowns;

  if (error) {
    return (
      <div className="component-area">
        <Result
          status="warning"
          title="Resource load failed"
          subTitle={
            <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
              {error.message}
            </span>
          }
        />
      </div>
    );
  }

  return (
    <CodeBlock
      key={id}
      pathHash={pathHash}
      demoid={id}
      getModule={getModule}
      {...props.previewerProps}
    />
  );
}

export function DumiDemoGrid(props) {
  const markdowns = useMarkdown();

  const cols = markdowns.frontmatter?.demo?.cols ?? 1;

  const items = unzip(chunk(props.items, cols));

  return (
    <div className="demo-grid-container">
      {items.map((col, i) => (
        <section style={{ flex: 1 }} key={String(i)}>
          {col.map((item) => {
            return <DumiDemo key={`grid-${item.demo.id}-${i}`} {...item} />;
          })}
        </section>
      ))}
    </div>
  );
}

export function Link(props) {
  return "LINK";
}
