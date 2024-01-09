"use client";

import { useState } from "react";
import {useDisclosure, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, AvatarIcon, DropdownSection, Accordion, AccordionItem, Listbox, ListboxItem, Chip} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale, AddNoteIcon, ListIcon} from "../../_utils/Icons.js";
import ThemeSwitch from "../ThemeSwitch.js";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const menuItems = [
    {
      label: "Tallas & Categorias",
      items: [
        {
          module: "Tallas",
          options: [
            {
              label: "Ver Tallas",
              description: "Lista todas las tallas creadas",
              href: "/tallas",
            },
            {
              label: "Crear Talla",
              description: "Puede crear una talla nueva",
              href: "#",
            },
          ]
        },
        {
          module: "Categorias",
          options: [
            {
              label: "Ver Categorías",
              description: "Lista todas las categorias creadas",
              href: "/categorias",
            },
            {
              label: "Crear Categoria",
              description: "Puede crear una categoría nueva",
              href: "#",
            },
          ]
        }
      ]
    },
    {
      label: "Gestion de docenas",
      items: [
        {
          module: "Docenas",
          options: [
            {
              label: "Ver todas las docenas",
              description: "Lista todas las categorias creadas",
              href: "#",
            },
            {
              label: "Registrar nueva docena",
              description: "Puede realizar el registro de una neuva docena",
              href: "#",
            },
            {
              label: "Buscar Docena por Código",
              description: "Buscar una docena por su código",
              href: "#",
            },
          ]
        },
        {
          module: "Estado de las docenas",
          options: [
            {
              label: "Docenas para el aparado",
              description: "Docenas para el aparador",
              href: "#",
            },
            {
              label: "Docenas para el armado",
              description: "Docenas para el armador",
              href: "#",
            },
            {
              label: "Docenas para rematar",
              description: "Docenas listas para rematar",
              href: "#",
            },
          ]
        }
      ]
    },
    {
      label: "Procesos",
      items: [
        {
          module: "Proceso actual de las docenas",
          options: [
            {
              label: "Proceso del aparado",
              description: "Ver estado de las docenas",
              href: "/tallas",
            },
            {
              label: "Proceso del Armado",
              description: "Ver estado de las docenas",
              href: "#",
            },
          ]
        }
      ]
    },
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
            <Link color="foreground" href="/dashboard" size="sm">
              Dashboard
            </Link>
          </NavbarItem>

          {/* Menu Items */}
          {menuItems.map(({label, items}, index) => (
            <Dropdown key={index}>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    {label}
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
                {items.map(({module, options}, i) => (
                  <DropdownSection title={module} showDivider key={i}>
                    {options.map(({label, description, href}, key) => (
                        <DropdownItem
                          key={key}
                          description={description}
                          startContent={<ListIcon className={iconClasses} />}
                          className="dark:text-gray-300 cursor-pointer"
                          onClick={() => location.href = href}
                        >
                          {label}
                        </DropdownItem>
                    ))}
                  </DropdownSection>
                ))}
              </DropdownMenu>
            </Dropdown>
          ))}
        </NavbarContent>

        <NavbarContent as="div" justify="end">
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
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>

        {/* Menu Mobile */}
        <NavbarMenu className="py-6">
          <NavbarMenuItem>
            <Link
              className="w-full"
              color="warning"
              href="/dashboard"
              size="sm"
            >
              Dashboard
            </Link>
          </NavbarMenuItem>
          {menuItems.map(({label, items}, index) => (
            <NavbarMenuItem key={index}>
              <Accordion variant="splitted" className="accordion-mobile">
                <AccordionItem key="1" aria-label="Accordion 1" title={label}>
                {items.map(({module, options}, i) => (
                  <div key={i} className="pl-2">
                    <small className="text-xs text-gray-800 dark:text-gray-400">{module}</small>
                    {options.map(({label, href}, key) => (
                    <Link
                      key={key}
                      isBlock
                      showAnchorIcon
                      className="w-full text-sm text-gray-500 dark:text-gray-300"
                      href={href}
                      size="sm"
                      color="foreground"
                    >
                      {label}
                    </Link>
                    ))}
                  </div>
                ))}
                </AccordionItem>
              </Accordion>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Link
              className="w-full"
              color="danger"
              href="dashboard"
              size="sm"
            >
              Cerrar Sesión
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
