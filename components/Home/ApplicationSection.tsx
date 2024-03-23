import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import PaymentApplicationById from './PaymentApplicationById'; // Adjust the file path as needed

const ApplicationSection = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApplicationId, setSelectedApplicationId] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch applications initially
        fetchApplications();

        // Set interval to fetch applications every 2 minutes
        const intervalId = setInterval(fetchApplications, 120000); // 2 minutes in milliseconds

        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const fetchApplications = () => {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/api/v1/applications/?limit=3&ordering=-id')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data);
                setApplications(data.results);
            })
            .catch(error => console.error('Error fetching applications:', error));
    };

    const numberFormat = (value: number | bigint) =>
        new Intl.NumberFormat('uz-UZ', {
            style: 'currency',
            currency: 'UZS',
        }).format(value);

    const handleOpenModal = (applicationId: string) => {
        if (!isModalOpen) {
            setSelectedApplicationId(applicationId);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="donate-section-two section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="section-tittle text-center mb-50">
                            <span className="sub-tittle text-capitalize font-600">Hurmatli yaxshi insonlar</span>
                            <h2 className="title font-700">Biz yordamga muhtojmiz</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-24">
                    {applications.map(application => (
                        <div key={application.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 view-wrapper">
                            <div className="single-donate h-calc wow fadeInUp" data-wow-delay="0.0s">
                                <div className="donate-img position-relative">
                                    <a href="#">
                                        <img className="w-100 img-height" src={application.image} alt="img"/>
                                    </a>
                                    <div className="donate-badge">
                                        <Link href={application.disease_category.wikipedia_url} className="subtitle"
                                              target="_blank">
                                            {application.disease_category.title}
                                        </Link>
                                    </div>
                                </div>
                                <div className="donate-info">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="donate-info-title">
                                            <h4 className="title text-capitalize">
                                                <a href="#">{application.title}</a>
                                            </h4>
                                            <p className="subtitle">{application.description}</p>
                                            <div className="progress custom-progress-two">
                                                <div className="progress-bar"
                                                     style={{width: Math.ceil(application.total_donations / application.required_amount.amount * 100) + '%'}}>
                                                    <div className="percentage">
                                                        <h4 className="title">{Math.ceil(application.total_donations / application.required_amount.amount * 100)} %</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-content-between mt-14 mb-20">
                                                <div className="flex gap-20">
                                                    <div className="charges">
                                                        <p className="pera">Kerakli summa</p>
                                                        <h4 className="title font-500">{numberFormat(application.required_amount.amount)}</h4>
                                                    </div>
                                                    <div className="charges">
                                                        <p className="pera">Yig'ildi</p>
                                                        <h4 className="title font-500">{numberFormat(application.total_donations)}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <button className="btn donate-btn w-100"
                                                        onClick={() => handleOpenModal(application.id)}>Ehson qilish
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedApplicationId &&
                <PaymentApplicationById applicationId={selectedApplicationId} onCloseModal={handleCloseModal}
                                        isOpen={isModalOpen}/>}
        </section>
    );
};

export default ApplicationSection;
