import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppContentLayout from "../Components/AppContentLayout";
import PageHeading from "../Components/PageHeading";
import SpinnerLoader from "../Components/SpinnerLoader";
import { getAllContacts } from "../redux/slice/contactUsSlice";

const ContactUs = () => {
  const { getAllData, isLoading } = useSelector(
    (state) => state.contactUsReducer
  );
  console.log(getAllData);
  const dispatch = useDispatch();
  useEffect(() => {
    let payload = {
      page: 1,
      limit: 10,
    };
    dispatch(getAllContacts({ payload }));
  }, []);

  return (
    <>
      <PageHeading title={"Contact Us Entries"} />
      <AppContentLayout>
        <div className="card">
          <div className="card-body">
            {isLoading ? (
              <SpinnerLoader />
            ) : (
              <table
                className="table table-striped table-row-bordered gy-5 gs-7 border rounded"
                id="contact_entries_table"
              >
                <thead>
                  <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                    <th className="min-w-125px">Name</th>
                    <th className="min-w-125px">Email</th>
                    <th className="min-w-125px">Phone</th>
                    <th className="min-w-125px">Subject</th>
                    <th className="min-w-125px">Date</th>
                    <th className="min-w-125px">Message</th>
                  </tr>
                </thead>

                <tbody className="fw-semibold text-gray-600">
                  {getAllData?.AllContact?.map((contactInfo) => {
                    return (
                      <tr key={contactInfo?.id}>
                        <td>
                          {contactInfo?.firstName}
                          {contactInfo?.lastName}
                        </td>
                        <td>{contactInfo?.email}</td>
                        <td>{contactInfo?.phone}</td>
                        <td>{contactInfo?.subject}</td>
                        <td>May 05 2022, 6:43 am</td>
                        <td className="mw-350px">{contactInfo?.message}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </AppContentLayout>
    </>
  );
};

export default ContactUs;
