import Link from 'next/link'

interface ContactCTAProps {
  heading: string
  description: string
  buttonText: string
  buttonHref: string
  external?: boolean
}

export default function ContactCTA({
  heading,
  description,
  buttonText,
  buttonHref,
  external = false,
}: ContactCTAProps) {
  return (
    <div className="contact-cta">
      <div className="container">
        <h2>{heading}</h2>
        <p className="mx-auto mt-5 mb-10 max-w-[55ch]">{description}</p>
        {external ? (
          <a href={buttonHref} className="btn-primary">
            {buttonText}
          </a>
        ) : (
          <Link href={buttonHref} className="btn-primary">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  )
}
