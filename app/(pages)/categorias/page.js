"use client"
import ModelsByCategory from "@/app/_components/ModelsByCategory";
import {Chip, cn, Listbox, ListboxItem} from "@nextui-org/react";
// import {IconWrapper} from "./IconWrapper";
// import {ItemCounter} from "./ItemCounter";
// import {BugIcon} from "./BugIcon";
// import {PullRequestIcon} from "./PullRequestIcon";
// import {ChatIcon} from "./ChatIcon";
// import {PlayCircleIcon} from "./PlayCircleIcon";
// import {LayoutIcon} from "./LayoutIcon";
// import {TagIcon} from "./TagIcon";
// import {UsersIcon} from "./UsersIcon";
// import {WatchersIcon} from "./WatchersIcon";
// import {BookIcon} from "./BookIcon";
// import {ChevronRightIcon} from "./ChevronRightIcon";

const ChevronRightIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const ItemCounter = ({number}) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-1 text-default-400">
      <span className="text-small">{number}</span>
      <ChevronRightIcon className="text-xl" />
    </div>
    {/* <Chip color="warning" size="sm" variant="dot">Editar</Chip> */}
  </div>
);

const IconWrapper = ({children, className}) => (
  <div className={cn(className, "flex items-center rounded-small justify-center w-7 h-7")}>
    {children}
  </div>
);

const TagIcon = (props) => (
  <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"
      fill="currentColor"
    />
    <circle cx="8.353" cy="8.353" fill="currentColor" r="1.647" />
  </svg>
);

export default function Categories() {
  return (
    <main className="flex min-h-screen p-6 gap-6 dark:bg-[#101010]">
      <div class="grid grid-cols-6 grid-flow-col gap-4">
        <Listbox
          aria-label="User Menu"
          onAction={(key) => alert(key)}
          className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
          itemClasses={{
            base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
          }}
        >
          <ListboxItem
            key="issues"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={13} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Issues
          </ListboxItem>
          <ListboxItem
            key="pull_requests"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={6} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Pull Requests
          </ListboxItem>
          <ListboxItem
            key="discussions"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={293} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Discussions
          </ListboxItem>
          <ListboxItem
            key="actions"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={2} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Actions
          </ListboxItem>
          <ListboxItem
            key="projects"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={4} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Projects
          </ListboxItem>
          <ListboxItem
            key="releases"
            className="group h-auto py-3"
            endContent={<ItemCounter number={399} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
            textValue="Releases"
          >
            <div className="flex flex-col gap-1">
              <span className="dark:text-gray-300">Releases</span>
              <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
                <span className="text-tiny text-default-600">Esta es una descripcion</span>
                {/* <div className="flex gap-2 text-tiny">
                  <span className="text-default-500">49 minutes ago</span>
                  <span className="text-success">Latest</span>
                </div> */}
              </div>
            </div>
          </ListboxItem>
          <ListboxItem
            key="contributors"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={79} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Contributors
          </ListboxItem>
          <ListboxItem
            key="watchers"
            className="dark:text-gray-300"
            endContent={<ItemCounter number={82} />}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            Watchers
          </ListboxItem>
          <ListboxItem
            key="license"
            className="dark:text-gray-300"
            endContent={<span className="text-small text-default-400">MIT</span>}
            startContent={
              <IconWrapper className="bg-primary/10 text-primary">
                <TagIcon className="text-lg" />
              </IconWrapper>
            }
          >
            License
          </ListboxItem>
        </Listbox>
        <div className="col-span-4">
          <ModelsByCategory />
          <ModelsByCategory />
          <ModelsByCategory />
          <ModelsByCategory />
        </div>
      </div>

    </main>
  );
}
