function ClientFooter() {
  return (
    <footer className="bg-gray-50 text-black py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase mb-4 text-gray-400">Contact Us</h3>
          <p className="text-sm">+1 (844) 326-6000</p>
          <p className="text-sm">Email Us</p>
          <p className="text-sm">Mon-Fri 9am-3pm PT</p>
        </div>

        {/* Customers */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase mb-4 text-gray-400">Customers</h3>
          <ul className="space-y-1 text-sm">
            <li>Start a Return</li>
            <li>Return Policy</li>
            <li>FAQ</li>
            <li>Catalogs and Mailers</li>
            <li>About Group Gifting</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold tracking-wide uppercase mb-4 text-gray-400">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Discover Revive</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Get the latest new from us</h3>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          <p className="text-xs text-gray-600 mt-2">
            By signing up, you agree to our{' '}
            <a href="#" className="underline">Privacy Policy</a> and{' '}
            <a href="#" className="underline">Terms of Service</a>.
          </p>
          <button className="mt-4 w-24 bg-black text-white py-2 text-sm rounded-md">
            Subscribe
          </button>
        </div>

        <div className="text-gray-400">PNJ</div>
      </div>


    </footer>
  )
}

export default ClientFooter
