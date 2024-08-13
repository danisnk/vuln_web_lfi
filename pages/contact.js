// pages/contact.js

export default function Contact() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Have questions or need assistance? Feel free to reach out to us using the contact information below:
        </p>
        <div className="text-lg text-gray-600 mb-4">
          <p>Email: <a href="mailto:info@company.com" className="text-blue-500 hover:underline">info@company.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
        </div>
        <p className="text-lg text-gray-600">
          We look forward to hearing from you!
        </p>
      </div>
    );
  }
  