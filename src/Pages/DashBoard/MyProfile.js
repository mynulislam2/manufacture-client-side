import React, { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../Component/firebase.init";
const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [AddMoreInfo, setAddMoreInfo] = useState(false);
  const [DataProfile, setDataProfile] = useState({});
  useEffect(() => {
    fetch(`https://pacific-caverns-51824.herokuapp.com/profile/?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`
      },
    })
      .then(res => res.json())
      .then(data => setDataProfile(data))
  }, [user, DataProfile, AddMoreInfo]);
  console.log(DataProfile);



  const Profile = (event) => {
    event.preventDefault()
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const education = event.target.education.value;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value


    const profileData = { userName, email, education, address, phone, linkedin }
    console.log(profileData);
    if (!DataProfile) {
      fetch('https://pacific-caverns-51824.herokuapp.com/profile',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileData),
        }
      )
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            setAddMoreInfo(false)
          }
        })


    }
    else {
      fetch(`https://pacific-caverns-51824.herokuapp.com/profile/?email=${email}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            setAddMoreInfo(false)
          }
        })


    }

  }

  return (

    <div className="grid lg:grid-cols-2 w-full overflow-hidden px-20 mt-5 mx-auto ">
      <div className="flex justify-center">
        <div class=" w-32">
          <img className="rounded-full" src="https://i.ibb.co/C9TWjF2/vecteezy-picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg" />
        </div>
      </div>

      {!AddMoreInfo &&
        <div className="text-secondary">
          <p className="p-3">Email:{user?.displayName}</p>
          <p className="p-3 ">Email:{user?.email}</p>
          {DataProfile?.address && <div>
            <p className="p-3 ">Address:{DataProfile?.address}</p>
            <p className="p-3 ">Education:{DataProfile?.education}</p>
            <p className="p-3 ">Linkedin:{DataProfile?.linkedin}</p>
            <p className="p-3 ">Phone:{DataProfile?.phone}</p>

          </div>}


          <button className="btn btn-primary w-full" onClick={() => setAddMoreInfo(true)}>{DataProfile ? 'edit info' : "add more info"}</button>
        </div>
      }

      <div className="text-secondary ">


        {
          AddMoreInfo
          && <form onSubmit={Profile}>
            <div className="grid grid-flow-row gap-y-3 mt-3">
              <div>
                <label >User Name</label>
                <input type="text"
                  value={user?.displayName}
                  name="userName"
                  class="input input-bordered input-accent w-full" />
              </div>
              <div className="mt-3">
                <input type="email"
                  value={user?.email}
                  name="email"
                  class="input input-bordered input-accent w-full" />
              </div>
              < div >
                <input type="text"
                  placeholder="education"
                  name="education"
                  class="input input-bordered input-accent w-full" />
              </div>
              <div>
                <input type="text"
                  placeholder="address"
                  name="address"
                  class="input input-bordered input-accent w-full" />
              </div>
              <div>
                <input type="number"
                  placeholder="phone"
                  name="phone"
                  class="input input-bordered input-accent w-full" />
              </div>
              <div>
                <input type="text"
                  placeholder="linkedin"
                  name="linkedin"
                  class="input input-bordered input-accent w-full" />
              </div>
              <input type="submit" className="btn mt-5 w-full btn-primary" value="save info" />
            </div>
          </form>
        }
      </div>

    </div>

  );
};

export default MyProfile;