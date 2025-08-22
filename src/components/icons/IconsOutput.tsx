import Behance from '@/components/icons/svg/Behance';
import Discord from '@/components/icons/svg/Discord';
import Github from '@/components/icons/svg/Github';
import Instagram from '@/components/icons/svg/Instagram';

export default function IconsOutput() {
  return (
    <div className="flex gap-[16px]">
        <Behance className="fill-white w-7 h-7" />
        <Discord className="fill-white w-7 h-7" />
        <Github className="fill-white w-7 h-7" />
        <Instagram className="fill-white w-7 h-7" />
    </div>
  )
}
