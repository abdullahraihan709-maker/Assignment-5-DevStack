import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (

        <footer className="w-full bg-white border-t border-gray-100 mt-20">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                
                {/* Upper Bar */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16 pb-16">

                    {/* Brand Block Start */}
                    <div className="max-w-sm flex flex-col gap-5">
                        <a href="/">
                            <img src={Logo} alt="Dev Stack Logo" className="h-8 w-auto" />
                        </a>
                        
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        {/* Social Links Start */}
                        <div className="flex items-center gap-5 text-slate-700 text-sm font-semibold pt-1">
                            <a href="">GitHub</a>
                            <a href="">Twitter</a>
                            <a href="" >LinkedIn</a>
                        </div>
                        {/* Social Links End */}

                    </div>
                    {/* Brand Block End */}




                    {/* Three Link Groups Start */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">

                        {/* Group-1: ProductStart */}
                        <div>
                            
                            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                                Product
                            </h5>

                            <div className="flex flex-col space-y-3 text-sm text-slate-500 font-normal">
                                <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
                                <a href="#" className="hover:text-slate-900 transition-colors">Technologies</a>
                                <a href="#" className="hover:text-slate-900 transition-colors">Projects</a>
                            </div>

                        </div>
                        {/* Group-1: ProductStart */}

                        {/* Group-2: Company Start */}
                        <div>

                            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                                Company
                            </h5>

                            <div className="flex flex-col space-y-3 text-sm text-slate-500 font-normal">
                                <a href="#" className="hover:text-slate-900 transition-colors">About</a>
                                <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
                                <a href="#" className="hover:text-slate-900 transition-colors">Careers</a>
                            </div>

                        </div>
                        {/* Group-2: Company End */}

                        {/* Group-3: Legal Start */}
                        <div>

                            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                                Legal
                            </h5>

                            <div className="flex flex-col space-y-3 text-sm text-slate-500 font-normal">
                                <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
                            </div>

                        </div>
                        {/* Group-3: Legal End */}

                    </div>
                    {/* Three Link Groups End */}

                </div>
                {/* Upper Bar End */}



                {/* Bottom Bar Start */}
                <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-normal">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <a href="" className="hover:text-slate-600 transition-colors">Privacy</a>
                        <a href="" className="hover:text-slate-600 transition-colors">Terms</a>
                    </div>
                    
                </div>
                {/* Bottom Bar End */}

            </div>

        </footer>
    );
};

export default Footer;