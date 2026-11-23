"use client";

import { useEffect, useState } from "react";

/** Typing roles animation (approved hero design): cycles his three roles. */
const ROLES = [
  "Digital Marketer",
  "Local SEO Expert",
  "WordPress Web Developer",
];

export default function TypingRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex % ROLES.length];
    let delay = deleting ? 45 : 75;
    if (!deleting && text === role) delay = 1800;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === role) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(role.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span>
      <span className="grad-text">{text}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
