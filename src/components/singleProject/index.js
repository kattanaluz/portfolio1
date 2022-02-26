import ImageLink from "../imageLink";
import Links from "../Links";

export default function SingleProject({
  unitProjectDivClass,
  aTagClass,
  href,
  src,
  imgTagClass,
  alt,
  projectTextClass,
  h4Text,
  technologiesClass,
  technologiesText,
  projectText,
  projectLinksClass,
  pageLink,
  gitLink,
}) {
  return (
    <div className={unitProjectDivClass}>
      <ImageLink
        aTagClass={aTagClass}
        href={href}
        imgTagClass={imgTagClass}
        src={src}
        alt={alt}
      />
      <div className={projectTextClass}>
        <h4>{h4Text}</h4>
        <p className={technologiesClass}>{technologiesText}</p>
        <p>{projectText}</p>
        <p>
          You can check out the project page{" "}
          <Links className={projectLinksClass} href={pageLink} text={"here"} />{" "}
          and the gitHub repository{" "}
          <Links className={projectLinksClass} href={gitLink} text={"here"} />.
        </p>
      </div>
    </div>
  );
}
