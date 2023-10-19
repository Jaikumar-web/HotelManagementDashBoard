import { useNavigate } from 'react-router-dom'
const NavigatePath = (props) => {
    const navigate = useNavigate();
    console.log("PathValue Check",props)
  return (
    navigate()
  )
}

export default NavigatePath
