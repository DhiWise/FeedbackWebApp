import React from "react";

import { useNavigate } from "react-router-dom";
import { postCreate, getMessages } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as cannyHeaderCreds from "constants/cannyHeaderCreds";
import { Column, Row, Text, Button, Img, List } from "components";

const DesktopOnePage = () => {
  const [apiData1, setapiData1] = React.useState();
  const [apiData3, setapiData3] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi3();
  }, []);

  function callApi1(selectedData) {
    const req = {
      data: {
        apiKey: cannyHeaderCreds.apikey,
        authorID: cannyHeaderCreds.authorid,
        boardID: cannyHeaderCreds.boardid,
        title: selectedData?.id,
        details: selectedData?.content,
      },
    };
    postCreate(req)
      .then((res) => {
        setapiData1(res);

        toast.success("Successfully Added In Canny");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi3() {
    const req = {};

    getMessages(req)
      .then((res) => {
        setapiData3(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/canny-feedbacks");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-end mx-[auto] lg:pt-[60px] xl:pt-[69px] 2xl:pt-[78px] 3xl:pt-[93px] w-[100%]">
        <Column className="items-end lg:px-[134px] xl:px-[153px] 2xl:px-[173px] 3xl:px-[207px] w-[100%]">
          <Row className="justify-end w-[91%]">
            <Text className="font-normal not-italic lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-light_blue_500 w-[auto]">
              Feedback From Discord
            </Text>
            <Button
              className="2xl:ml-[105px] 3xl:ml-[126px] flex items-center justify-center lg:ml-[81px] text-center w-[17%] xl:ml-[93px]"
              onClick={handleNavigate1}
              leftIcon={
                <Img
                  src="images/img_bookmark.png"
                  className="text-center lg:w-[11px] lg:mr-[10px] xl:w-[13px] xl:mr-[12px] 2xl:w-[15px] 2xl:mr-[14px] 3xl:w-[18px] 3xl:mr-[16px]"
                  alt="bookmark"
                />
              }
            >
              <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                Canny Feedback
              </div>
            </Button>
          </Row>
        </Column>
        <Column className="items-center lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
          <Column className="items-center w-[100%]">
            <Row className="bg-gray_100 border border-gray_300 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[650px]">
                Thread Number
              </Text>
              <Text className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[700px]">
                Description
              </Text>
              <Text className="font-normal lg:ml-[497px] xl:ml-[569px] 2xl:ml-[640px] 3xl:ml-[768px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[450px]">
                Action
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              {
            apiData3?.map((apiData)=>{
              return (
              <Row className="bg-white_A700 border border-gray_301 border-solid items-center my-[0] lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px] w-[100%]">
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[20%]">
                  {apiData?.id}
                </Text>
                <div dangerouslySetInnerHTML={{__html: apiData?.content}}  className="font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[60%]">
                
                </div>
                <Button
                  className="3xl:ml-[57px] flex items-center justify-center lg:ml-[37px] ml-[48px] mt-[1px] text-center w-[12%] xl:ml-[42px]"
                  onClick={() => {
                    callApi1(apiData);
                  }}
                  leftIcon={
                    <Img
                      src="images/img_bookmark.png"
                      className="w-[15px] mr-[14px] text-center lg:w-[11px] lg:mr-[10px] xl:w-[13px] xl:mr-[12px] 3xl:w-[18px] 3xl:mr-[16px]"
                      alt="bookmark"
                    />
                  }
                >
                  <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                    Push To Canny
                  </div>
                </Button>
              </Row>
              )
                })}
            </List>
          </Column>
        </Column>
      </Column>
      <footer className="text-center">
                Made with ❤️ using DhiWise
                </footer>
      <ToastContainer />
    </>
  );
};

export default DesktopOnePage;
