// import node module libraries
import Link from 'next/link';
import { Card, Image } from 'react-bootstrap';

const MyTeam = () => {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title as="h4">My Team</Card.Title>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                        <div>
                            <Image src="/images/avatar/avatar.jpg" className="rounded-circle avatar-md" alt="" />
                        </div>
                        <div className="ms-3 ">
                            <h5 className="mb-1">User 2</h5>
                            <p className="text-muted mb-0 fs-5 text-muted">DevOps Engineer</p>
                        </div>
                    </div>
                    <div>
                        {/* icons */}
                        <Link href="#" className="text-muted text-primary-hover me-3"><i className="fe fe-phone-call fs-4"></i></Link>
                        <Link href="#" className="text-muted text-primary-hover"><i className="fe fe-video fs-4"></i></Link>
                    </div>
                </div>
                
            </Card.Body>
        </Card>
    )
}

export default MyTeam