import React, { useEffect, useState, useRef } from "react";
import suneditor from "suneditor";

export function SunEditor() {
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  const [isEditorReady, setIsEditorReady] = useState(false);

  useEffect(function InitEditor() {
    editorInstanceRef.current = suneditor.create(editorRef.current);

    if (getEditorInstance) getEditorInstance(editorInstanceRef.current);
    if (onSave) editorInstanceRef.current.onSave = (content) => onSave(content);
    setIsEditorReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={editorRef} />
      {isEditorReady && (
        <CustomPluginPortals {...rest} ref={editorInstanceRef} />
      )}
    </>
  );
}
