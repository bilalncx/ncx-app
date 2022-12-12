import {React, useState} from 'react';
// import './blogheader.css';

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
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    // TODO
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <div className="header-form">
      <form onSubmit={handleSubmit}>
      <input
        aria-label="Your email address"
        name="email_address"
        placeholder="Your email address"
        required
        type="email"
        onChange={handleEmailChange}
        value={email}
      />
      <button>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default SubscribeForm;