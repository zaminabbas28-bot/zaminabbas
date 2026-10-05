interface JsonLdProps {
  data: Record<string, unknown>;
  id?: string;
}

/** Injects a JSON-LD structured data block into <head>. */
export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
