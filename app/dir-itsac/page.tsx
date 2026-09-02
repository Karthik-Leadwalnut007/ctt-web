import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List, ListChecks, LinkIcon } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DIR-ITSAC Contract",
  description:
    "Information regarding Connect Tech+Talent's IT Staff Augmentation Contract (ITSAC) with the Texas Department of Information Resources (DIR).",
}

const expertiseAreas = [
  "Mobile Application Development (iOS, Android, other)",
  "Web Development (Cloud/.NET-C#, Java- J2EE, JEE, PHP, Python/Ruby on Rails)",
  "ERP Development and Administration (PeopleSoft)",
  "Enterprise Application Integration",
  "Database Design, Development and Administration (Oracle, DB2, MS SQL and MySQL)",
  "Legacy System Development and Support (COBOL)",
  "Tools Development (C#, Java/C, C++)",
  "Embedded Systems Development (C/C++, Linux, WinCE)",
  "Linux, Windows, Android, iOS and many other areas.",
];

const staffingServices = [
  "Software Development",
  "Cloud",
  "Cybersecurity",
  "Data",
  "PM",
  "Business Analyst",
  "Network",
  "QA",
  "Helpdesk",
];

const contractCategories = [
  "Applications",
  "Enterprise Architect",
  "Project Management",
  "Data Management",
  "Telecom/Networking",
  "Security",
  "Customer Technical Support",
]

const dirLinks = [
  { text: "Connect Tech+Talent, Inc. DIR Vendor information", href: "https://dir.texas.gov/contracts/dir-cpo-5440" },
  { text: "DIR Cooperative Contracts", href: "https://dir.texas.gov/cooperative-contracts?id=41" },
  {
    text: "To order services under the ITSAC contract follow these easy instructions",
    href: "https://dir.texas.gov/cooperative-contracts/it-staffing-services?id=13",
  },
  { text: "Here is the link to the complete list of Titles and Descriptions", href: "https://txdir.widen.net/view/pdf/8lvretj7yn/DIR-CPO-5440-Appendix-D-ITSAC-Job-Category-Title-Descriptions-per-Amendment-1.pdf" },
  {
    text: "Link to our DIR pricing",
    href: "https://txdir.widen.net/view/pdf/ewhgjqc2s5/DIR-CPO-5440-Appendix-C-ITSAC-NotToExceedRates.pdf",
  },
]

const programLinks = [
  {
    text: "DIR Using the Best Value Process",
    href: "https://dir.texas.gov/cooperative-contracts/it-staffing-services?id=13",
  },
  { text: "Info on the DIR CO-OP PROGRAM", href: "https://dir.texas.gov/cooperative-contracts?id=41" },
]

export default function DirItsacPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-900 mb-4">
              Over 29+ Years of Excellence in Tech Staffing & Recruiting
            </h1>
            <p className="text-lg text-gray-600">
              Connect Tech+Talent, Inc. is a well established software development and technical staffing services
              provider that has been based in Austin, Texas since 1996.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-6 text-center">
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
<img src="https://damaninc.com/wp-content/uploads/2020/12/DIR.png" alt="" width="150" height="76" srcset="https://damaninc.com/wp-content/uploads/2020/12/DIR.png 310w, https://damaninc.com/wp-content/uploads/2020/12/DIR-300x152.png 300w" sizes="(max-width: 150px) 100vw, 150px"/>

                </div>
                <p className="text-gray-700 mb-2">We have been recently awarded the:</p>
                <p className="text-xl font-semibold text-gray-900">
                  <Link href="https://dir.texas.gov/contracts/dir-cpo-5440">
                  Department of Information Resources ITSAC:
                  <br />
                  IT Staff Augmentation Contract <span className="font-bold">#DIR-CPO-5440</span>
                  </Link>
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-10">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <List className="h-5 w-5 mr-2 text-gray-700" />
                    IT Staffing Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {staffingServices.map((area) => (
                      <li key={area} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ListChecks className="h-5 w-5 mr-2 text-gray-700" />
                    Contract Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {contractCategories.map((category) => (
                      <li key={category} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span>{category}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <LinkIcon className="h-5 w-5 mr-2 text-gray-700" />
                <Link
                  key="DIRLinks"
                  href="https://dir.texas.gov/contracts/dir-cpo-5440"
                >
                 DIR Links (DIR Contract Number: DIR-CPO-5440)
                </Link>
              </h2>
              <div className="space-y-2">
                {dirLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="block text-gray-700 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p>For quotes, purchase orders, warranty information and more, please contact:</p>
                  <div>
                    <p className="font-bold text-gray-900">KANNAN KALIYUR</p>
                    <p className="text-gray-600">CEO</p>
                  </div>
                  <div>
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:512-338-1111,101" className="text-gray-700 hover:underline">
                        512-338-1111 ext 101
                      </a>
                    </p>
                    <p>
                      <strong>Fax:</strong> 512-918-0449
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:kannank@connecttechtalent.com" className="text-gray-700 hover:underline">
                        kannank@connecttechtalent.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Vendor ID:</strong> 1742771048200
                    </p>
                    <p>
                      <strong>All PO’s should Include our DIR Contract No:</strong> DIR-CPO-5440
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                {programLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="block text-gray-700 hover:text-gray-900 hover:underline transition-colors"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  PLEASE NOTE: NAVIGATION FROM THIS PAGE DOES NOT REPRESENT TEXAS DIR CONTRACT OFFERINGS.
              </h3>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Location</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.580194889913!2d-97.7580968848758!3d30.41915898174786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc9a9a6b4911%3A0x42a52c0260e2b193!2s11824%20Jollyville%20Rd%20%23302%2C%20Austin%2C%20TX%2078759%2C%20USA!5e0!3m2!1sen!2s!4v1678886400000!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Connect Tech+Talent Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
