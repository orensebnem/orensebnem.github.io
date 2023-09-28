import SMenu, {SMenuProps} from "./index.menu";
import {
    Button,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack, useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Link from "next/link";

interface SMenusProps {
    data: SMenuProps[];
    selected: string;
}

export const SMenus = ({data}: SMenusProps) => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const getMenusComponent = () => {
        return data?.map((menu) => {
            return <SMenu
                href={menu.href}
                key={menu.label}
                label={menu.label}
                selected={menu.selected}
                hasPageTitle={menu.hasPageTitle}
                isLink={menu.isLink}/>
        })
    }

    const getMenusComponentForMobile = () => {
        return data?.map((menu) => {
            return <SMenu
                size={40}
                href={menu.href}
                key={menu.label}
                label={menu.label}
                selected={menu.selected}
                hasPageTitle={menu.hasPageTitle}
                isLink={menu.isLink}/>
        })
    }

    return (
        <>
            <IconButton
                aria-label="Open Menu"
                size="lg"
                mr={2}
                icon={
                    <HamburgerIcon/>
                }
                onClick={() => onOpen()}
                display={['flex', 'flex', 'none', 'none']}
            />
            <Stack direction="row" gap={10} display={["none", "none", "flex", "flex"]}>
                {getMenusComponent()}
            </Stack>

            <Modal onClose={onClose} size="full" isOpen={isOpen}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader fontSize={40}>MENU</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        {getMenusComponentForMobile()}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}