import InternshipHero from '../components/internship/InternshipHero'
import TrackCards from '../components/internship/TrackCards'
import ProgramTimeline from '../components/internship/ProgramTimeline'
import ApplicationForm from '../components/internship/ApplicationForm'
import SuccessStories from '../components/internship/SuccessStories'

const InternshipProgram = () => {
  return (
    <div>
      <InternshipHero />
      <TrackCards />
      <ProgramTimeline />
      <ApplicationForm />
      <SuccessStories />
    </div>
  )
}

export default InternshipProgram
