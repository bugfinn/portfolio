import HeroSection      from '@/components/sections/HeroSection'
import SkillsGrid       from '@/components/sections/SkillsGrid'
import ProjectShowcase  from '@/components/sections/ProjectShowcase'
import ContactForm      from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <HeroSection     />
      <SkillsGrid      />
      <ProjectShowcase />
      <ContactForm     />
    </>
  )
}