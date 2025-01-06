import { useThem } from '../hooks/useThem';
import './ThemSelector.scss'
export default function ThemSelector() {
    const color = ["#712ba0","#3be758","#e73b8b"]
    const {changeColor} = useThem();
  return (
    <div className='themSelector'>
        {
            color && color.map(color=>(
                <div key={color} style={{background:color}} className='cirlce-slector' onClick={()=>changeColor(color)}> 

                </div>
            ))
        }
    </div>
  )
}
