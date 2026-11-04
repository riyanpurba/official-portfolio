import Github from '@/templates/Github';
import LinkedIn from '@/templates/LinkedIn';
import Instagram from '@/templates/Instagram';
import { FC } from 'react';

interface SocialMediaProps {
  childClass?: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ childClass }) => {
  return (
    <ul className={childClass}>
      <li>
        <a href="https://github.com/riyanpurba" target="_blank" className="cursor-pointer" rel="noreferrer" title="github">
          <Github iconClass="w-6 h-6 text-muted hover:text-accent" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/riyanpurba" target="_blank" className="cursor-pointer" rel="noreferrer" title="instagram">
          <Instagram iconClass="w-6 h-6 text-muted hover:text-accent" />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/riyanpurba" target="_blank" className="cursor-pointer" rel="noreferrer" title="linkedin">
          <LinkedIn iconClass="w-6 h-6 text-muted hover:text-accent" />
        </a>
      </li>
    </ul>
  )
};

export { SocialMedia };