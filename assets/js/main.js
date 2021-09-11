let resumeData = null;

getResume();

const showWork = (works) => {
  let containerWork = $("#container-work");
  let cardWork = $("#card-work");
  works.forEach(function (work, key) {
    console.log(work);
    var item = cardWork.clone(true, true);

    item.attr("id", "work" + (key + 1));
    item.removeClass("hide");

    item.find(".resume-position-title").text(work.position);
    item.find(".resume-company-name ").text(work.name);

    containerWork.append(item);
  });
};

const show = () => {
  const { work, education } = resumeData;
  showWork(work);
};
