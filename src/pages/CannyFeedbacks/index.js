import React from "react";

import { useNavigate } from "react-router-dom";
import { postTask, postList } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as clickUpHeaderCreds from "constants/clickUpHeaderCreds";
import _ from "lodash";
import { Column, Row, Text, Button, Img, List } from "components";

const DesktopTwoPage = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi2();
  }, []);

  function callApi(selectedData) {
    const req = {
      data: {
        type: clickUpHeaderCreds.type,
        name: selectedData?.title,
        status: clickUpHeaderCreds.status,
        position: clickUpHeaderCreds.position,
        content: {
          ops: [
              {
                  insert: selectedData?.details
              }]
            },
        project:{
          id: clickUpHeaderCreds.project.id,
          name: clickUpHeaderCreds.project.name,
        },
        categoryId: clickUpHeaderCreds.categoryId,
        subcategoryId: clickUpHeaderCreds.subcategoryId,
        draft_uuid: "1d15c23f-4736-4821-9e94-18fc0d"+Math.floor(Math.random()*16777215).toString(16),
        dont_follow: clickUpHeaderCreds.dont_follow,
        subcategory_id: clickUpHeaderCreds.subcategory_id,
        v2: clickUpHeaderCreds.v2,
        check_required_custom_fields:
          clickUpHeaderCreds.check_required_custom_fields,
      },
    };
    postTask(req)
      .then((res) => {
        setapiData(res);

        toast.success("ClickUp Task Created Successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi2() {
    const req = {
      params: {
        apiKey:"1b3b36d5-20a5-0ac4-ff20-12ea8b656df0",
        id:"62de426363bf6644bc72820b"
      }
    };
    postList(req)
      .then((res) => {
        console.log(res);
        setapiData2(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate2() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter justify-end mx-[auto] lg:pt-[54px] xl:pt-[62px] 2xl:pt-[70px] 3xl:pt-[84px] w-[100%]">
        <Column className="items-end lg:px-[134px] xl:px-[153px] 2xl:px-[173px] 3xl:px-[207px] w-[100%]">
          <Row className="justify-end w-[91%]">
            <Text className="font-normal mt-[4px] not-italic lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-light_blue_500 w-[auto]">
              Feedback From Canny
            </Text>
            <Button
              className="2xl:ml-[105px] 3xl:ml-[126px] flex items-center justify-center lg:ml-[81px] text-center w-[17%] xl:ml-[93px]"
              onClick={handleNavigate2}
              leftIcon={
                <Img
                  src="images/img_user.png"
                  className="text-center lg:w-[20px] lg:mr-[3px] xl:w-[23px] xl:mr-[4px] 2xl:w-[26px] 2xl:mr-[5px] 3xl:w-[32px] 3xl:mr-[6px]"
                  alt="user"
                />
              }
            >
              <div className="common-pointer bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px]">
                Discord Feedbacks
              </div>
            </Button>
          </Row>
        </Column>
        <Column className="items-center lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
          <Column className="items-center w-[100%]">
            <Row className="bg-gray_100 border border-gray_300 border-solid items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]">
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[4px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[650px]">
                Title
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
                apiData2?.posts?.map((apiData)=>{
                  return(
              <Row className="bg-white_A700 border border-gray_301 border-solid items-center my-[0] lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px] w-[100%]">
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[20%]">
                  {apiData?.title}
                </Text>
                <Text className="font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[60%]">
                  {apiData?.details}
                </Text>
                <Button
                  className="3xl:ml-[57px] flex items-center justify-center lg:ml-[37px] ml-[48px] mt-[1px] text-center w-[12%] xl:ml-[42px]"
                  onClick={() => {
                    callApi(apiData);
                  }}
                  leftIcon={
                    <Img
                      src="images/img_arrowup.png"
                      className="w-[7.92px] mr-[5px] bg-deep_purple_A200 text-center lg:w-[6px] lg:mr-[3px] xl:w-[7px] xl:mr-[4px] 2xl:w-[7px] 3xl:w-[9px] 3xl:mr-[6px] rounded-radius95"
                      alt="arrow_up"
                    />
                  }
                >
                  <div className="common-pointer bg-transparent font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px]">
                    Push To ClickUp
                  </div>
                </Button>
              </Row>)
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

export default DesktopTwoPage;
