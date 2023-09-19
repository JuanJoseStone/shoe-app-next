"use client";

import { useState } from "react";
import ModalSizes from "../modals/ModalSizes"
import {useDisclosure, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, AvatarIcon, Input, DropdownSection} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale, AddNoteIcon, ListIcon} from "../Icons.js";
import ThemeSwitch from "../ThemeSwitch.js";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="dark:bg-[#18181b]"
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <p className="font-bold text-inherit">Nik Fort</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <p className="font-bold text-inherit dark:text-gray-200">NIK FORT</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#" size="sm">
              Dashboard
            </Link>
          </NavbarItem>

          {/* <Dropdown backdrop="blur">
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Tallas
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Categorias
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Crear Categoria
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Modelos
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                Crear Modelo
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}

          {/* TALLAS & CATEGORIAS */}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Tallas & Categorías
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownSection title="Tallas" showDivider>  
                <DropdownItem
                  key="autoscaling"
                  description="Lista todas las tallas creadas"
                  startContent={<ListIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Ver tallas
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Puede crear una talla nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                  onPress={onOpen}
                >
                  Crear talla
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Categorias">  
                <DropdownItem
                  key="production_ready"
                  description="Lista todas las categorias creadas"
                  startContent={<ListIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                  Link="categorias"
                >
                  Ver Categorías
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Puede crear una categoría nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Crear Categoria
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>

          {/* GESTION DE DOCENAS */}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Gestión de docenas
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownSection title="Docenas" showDivider>  
                <DropdownItem
                  key="production_ready"
                  description="Lista todas las categorias creadas"
                  startContent={<ListIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Ver todas las docenas
                </DropdownItem>
                <DropdownItem
                  key="autoscaling"
                  description="Lista todas las tallas creadas"
                  startContent={<ListIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Registrar nueva docena
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Puede crear una talla nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Buscar Docena por Código
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="Estado de las docenas">  
                <DropdownItem
                  key="new"
                  description="Puede crear una categoría nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Docenas para el aparado
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Puede crear una categoría nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Docenas para el armado
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Puede crear una categoría nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Docenas para rematar
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>

          {/* PROCESOS DE DOCENAS */}
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Procesos
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownSection title="Proceso actual de las docenas">  
                <DropdownItem
                  key="new"
                  description="Puede crear una categoría nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Proceso del aparado
                </DropdownItem>
                <DropdownItem
                  key="new"
                  description="Puede crear una categoría nueva"
                  startContent={<AddNoteIcon className={iconClasses} />}
                  className="dark:text-gray-300"
                >
                  Proceso del Armado
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem> */}
          {/* <Input
            classNames={{
              base: "max-w-full sm:max-w-[14rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          /> */}
          {/* <button onClick={() => setTheme('light')}>Light Mode</button>
          <button onClick={() => setTheme('dark')}>Dark Mode</button> */}

          <ThemeSwitch />

          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                // name="Jason Hughes"
                size="sm"
                icon={<AvatarIcon />}
                // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="sm"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* <ModalSizes /> */}
    </>
  );
}
