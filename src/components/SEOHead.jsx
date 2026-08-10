import { useEffect } from 'react';

/**
 * Updates document title & meta description dynamically for each page
 */
export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title || "Mohammed Gulab Hussain | Astrology & Spiritual Guidance";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "Personalized astrological and spiritual guidance for love, relationships, marriage, family, and financial problems by Muslim Astrologer Mohammed Gulab Hussain.";
  }, [title, description]);

  return null;
}
