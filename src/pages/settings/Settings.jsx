import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>

        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsPP">
            <img src="headerimg.jpg"></img>
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{display: "none"}}></input>
            </div>
            <label>Username</label>
            <input type="text"  placeholder='Marie'/>
            <label>Email</label>
            <input type="email"  placeholder='sarie@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className='settingsSubmit'>Update</button>
            
          
        </form>
        
      </div>
      <Sidebar/>

      </div>
  )
}

export default Settings