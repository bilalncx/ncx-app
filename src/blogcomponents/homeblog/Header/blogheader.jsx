import {React, useState} from 'react';
import NCXNewsletter from '../../../Assets/components/newsletter/subscribe';
import './blogheader.css';

// const Header = () => (
//   <header className='home-header'>
//     <h2>Inc. This Morning</h2>
//     <h1>
//       <span>“</span> Blog <span>”</span>
//     </h1>
//     <p>
//       awesome place to make oneself <br /> productive and entertained through
//       daily updates.
//     </p>
//   </header>
// );

// export default Header;

const SubscribeForm = () => {
  // const [email, setEmail] = useState("")
  // const [name, setName] = useState("")

  // const handleSubmit = async (event: React.FormEvent) => {
  //   // TODO
  // }

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target
  //   setEmail(value)
  // }

  return (
    <div className="header-form">
      <NCXNewsletter />
    </div>
  )
}

export default SubscribeForm;