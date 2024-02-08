import { HomeComponent } from "../components/Home"
import "../css/home.modules.css";

export const HomePage = () => {
    return( 
        <div className="py-5 py-md-0">
            <HomeComponent  />
        </div>
    )
}