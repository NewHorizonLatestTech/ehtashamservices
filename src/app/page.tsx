import Head from "next/head";
import './globals.css'
import './nav.css'
import './Home.module.css'



export default function Home() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
                />
                {/* <script src="https://cdn.tailwindcss.com"></script> */}
                <link
                    rel="shortcut icon"
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/favicon.png?v=29818458213238068251642580843"
                    type="image/png"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/frame.scss.css?v=26842676914315532001674778629"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/home-sections.scss.css?1650"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/style.css?v=30686512873233263451654235224"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/slick.scss?v=101226323548799392701629637261"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/prettyPhoto.css?v=127577845115257541841629637244"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/animate.css?v=170469424254788653381629637215"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/font-all.min.css?v=145974524023387984911629637225"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    href="//fonts.googleapis.com/css?family=Montserrat:300,300italic,400,500,600,400italic,600italic,700,700italic,800,800italic"
                />

                <title>DAIG - Online Catering Services In Twin Cities</title>
            </Head>

            <div className="min-h-full">
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8"
                                        src="//cdn.shopify.com/s/files/1/0436/7371/4851/t/7/assets/favicon.png?v=29818458213238068251642580843"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            href="#"
                                            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                            aria-current="page"
                                        >
                                            Home
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Rabi ul Awal
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Desserts
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Dawat
                                        </a>

                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Gift A Dawat
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Sadqa
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Events
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>

                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                            />
                                        </svg>
                                    </button>

                                    <div className="relative ml-3">
                                        <div>
                                            <button
                                                type="button"
                                                className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                                id="user-menu-button"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="/40.jpg"
                                                    alt=""
                                                />
                                            </button>
                                        </div>

                                        <div
                                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="user-menu-button"
                                        >
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                id="user-menu-item-0"
                                            >
                                                Your Profile
                                            </a>

                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                id="user-menu-item-1"
                                            >
                                                Settings
                                            </a>

                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                id="user-menu-item-2"
                                            >
                                                Sign out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>

                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>

                                    <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="hero"></div>
                    <div className="md:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            <a
                                href="#"
                                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                                aria-current="page"
                            >
                                Home
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Rabi ul Awal
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Desserts
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Dawat
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Gift A Dawat
                            </a>

                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Sadqa
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Events
                            </a>
                        </div>
                        <div className="border-t border-gray-700 pt-4 pb-3">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="/40.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium leading-none text-white">
                                        Rana Reebaal
                                    </div>
                                    <div className="text-sm font-medium leading-none text-gray-400">
                                        rebaalhussain@gmail.com
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                <a
                                    href="#"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    Your Profile
                                </a>

                                <a
                                    href="#"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    Settings
                                </a>

                                <a
                                    href="#"
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <header className="bg-white shadow">

                </header>

            </div>
            <div className="full">
                <p className="large">
                    <div className="col-lg-13">
                        <div className="carousel">
                            <div>
                                <iframe
                                    src="https://cdn.shopify.com/s/files/1/0436/7371/4851/files/header_video_reduced.mp4?v=1636619535"
                                    // allowfullscreen
                                    // frameborder="0"
                                    name="slider1"
                                ></iframe>
                            </div>
                            <span>
                                <a
                                    href="https://www.youtube.com/embed/EI-Lhj7jCWg"
                                    target="slider1"
                                >
                                    <img src="/images.png" title="sliderimg" />
                                </a>
                                <a
                                    href="https://cdn.shopify.com/s/files/1/0436/7371/4851/files/header_video_reduced.mp4?v=1636619535"
                                    target="slider1"
                                >
                                    <img src="/image.png" title="sliderimg" />
                                </a>

                                <a
                                    href="https://www.youtube.com/embed/buILFt65huQ"
                                    target="slider1"
                                >
                                    <img src="/imaga.png" title="sliderimg" />
                                </a>
                            </span>
                        </div>
                    </div>

                    <br />
                </p>
            </div>

            <div
                id="shopify-section-1590738539295"
                className="shopify-section index-section"
            >
                <div
                    data-section-id="1590738539295"
                    data-section-type="newsletter-block news-block-3"
                    className="newsletter-block news-block-3"
                >
                    <div className="newsletter-block-type-3 ">
                        <div className="overlay"></div>
                        <div className="container">
                            <div className="mc-embedded-subscribe-form">
                                <form
                                    method="post"
                                    action="/"
                                    id="contact_form"
                                    accept-charset="UTF-8"
                                    className="contact-form"
                                >
                                    <input type="hidden" name="form_type" value="customer" />
                                    <input type="hidden" name="utf8" value="✓" />

                                    <input
                                        required
                                        type="email"
                                        aria-label="Your Name"
                                        className="mail"
                                        placeholder="Your Name"
                                    />
                                    <br />
                                    <input
                                        required
                                        type="email"
                                        placeholder="Email address"
                                        // name="contact[email]"
                                        className="mail"
                                        aria-label="Email address"
                                    />
                                    <br />

                                    <input
                                        required
                                        type="email"
                                        aria-label="Phone No"
                                        className="mail"
                                        placeholder="Phone No"
                                    />
                                    <br />
                                    <input
                                        required
                                        type="email"
                                        aria-label="Delivery Address"
                                        className="mail"
                                        placeholder="Delivery Address"
                                    />
                                    <br />
                                    <input
                                        required
                                        type="hidden"
                                        name="contact[tags]"
                                        value="newsletter"
                                    />
                                    <br />
                                    <button
                                        type="submit"
                                        className="btn subscribe"
                                        name="subscribe"
                                        value=""
                                    >
                                        Book Your Order
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="shopify-section-footer-model-9" className="text-center shopify-section" >
                <div
                    data-section-id="footer-model-9"
                    data-section-type="Footer-model-9"
                    className="footer-model-9"
                >
                    <footer
                        className="site-footer"
                    // style="background-color:rgba(0,0,0,0); background-image:url('//cdn.shopify.com/s/files/1/0436/7371/4851/files/footer_1.jpg?v=1636108887');background-repeat:no-repeat;background-size:cover;background-position:center;"
                    >
                        <div className="container">
                            <div className="grid-uniform">
                                <div className="grid__item wide--one-half post-large--one-half large--one-half medium--one-half">
                                    <h4 style={{ color: "#ffffff" }}>Help</h4>

                                    <ul className="site-footer__links">
                                        <li>
                                            <a style={{ color: "#ffffff" }} href="/search">
                                                Search
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                style={{ color: "#ffffff" }}
                                                href="/policies/terms-of-service"
                                            >
                                                Terms & Conditions
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                style={{ color: "#ffffff" }}
                                                href="/policies/privacy-policy"
                                            >
                                                Policies
                                            </a>
                                        </li>

                                        <li>
                                            <a style={{ color: "#ffffff" }} href="/pages/contact-us">
                                                Contact us
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="grid__item wide--one-half post-large--one-half large--one-half medium--one-half">
                                    <h4 style={{ color: "#ffffff" }}>Contact us</h4>

                                    <div className="address">
                                        <p style={{ color: "#ffffff" }}>
                                            <i className="fa fa-home"></i> Hatar Road Taxila
                                        </p>

                                        <p style={{ color: "#ffffff" }}>
                                            {" "}
                                            <i className="fa fa-phone"></i>0311-512060
                                        </p>
                                    </div>

                                    <ul className="link">
                                        <li>
                                            {" "}
                                            <i
                                                style={{ color: "#ffffff" }}
                                                className="fas fa-globe-asia"
                                            ></i>{" "}
                                            <a
                                                className="domain"
                                                style={{ color: "#ffffff" }}
                                                href="mailto:rebaalhussain@gmail.com"
                                            >
                                                Ehtsham_Online_Daig_Services
                                            </a>
                                        </li>

                                        <li>
                                            {" "}
                                            <i
                                                style={{ color: "#ffffff" }}
                                                className="fa fa-envelope"
                                            ></i>{" "}
                                            <a
                                                className="mail"
                                                style={{ color: "#ffffff" }}
                                                href="mailto:rebaalhussain@gmail.com"
                                            >
                                                rebaalhussain@gmail.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="grid__item">
                            <div
                                className="social_icons_bg"
                                style={{
                                    float: "left",
                                    width: "100%",
                                    background: "rgba(0,0,0,0)",
                                }}
                            >
                                <div className="grid__item wide--one-half post-large--one-half large--one-half medium--one-half">
                                    <div className="footer_social_links">
                                        <h4 style={{ color: "#ffffff" }}>Connect with us</h4>

                                        <ul className="inline-list social-icons social-links-type-1">
                                            <li>
                                                <a
                                                    className="icon-fallback-text fb hexagon"
                                                    target="blank"
                                                    href="https://www.facebook.com/rebaal.hussain/"
                                                    // onmouseover="this.style.color='';"
                                                    // onmouseout="this.style.color='';"
                                                    title="Facebook"
                                                >
                                                    <span
                                                        className="fab fa-facebook"
                                                        aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="icon-fallback-text ins"
                                                    target="blank"
                                                    href="https://www.instagram.com/abeer_rae/?hl=en"
                                                    // onmouseover="this.style.color='';"
                                                    // onmouseout="this.style.color='';"
                                                    title="Instagram"
                                                >
                                                    <span
                                                        className="fab fa-instagram"
                                                        aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    className="icon-fallback-text youtube"
                                                    target="blank"
                                                    href="https://www.youtube.com/@millionaro5348"
                                                    // onmouseover="this.style.color='';"
                                                    // onmouseout="this.style.color='';"
                                                    title="YouTube"
                                                >
                                                    <span
                                                        className="fab fa-youtube"
                                                        aria-hidden="true"
                                                    ></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <button>
                <a href="#hero">
                    <img className="go" src="/up.png" alt="go" />
                </a>
            </button>
        </>
    );
}
