import { createStyles, Navbar, getStylesRef, rem } from "@mantine/core";
import {
    IconBellRinging,
    IconLayoutDashboard,
    IconUsers,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    header: {
        paddingBottom: theme.spacing.md,
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
        borderBottom: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[2]
        }`,
    },

    link: {
        ...theme.fn.focusStyles(),
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
            color: theme.colorScheme === "dark" ? theme.white : theme.black,

            [`& .${getStylesRef("icon")}`]: {
                color: theme.colorScheme === "dark" ? theme.white : theme.black,
            },
        },
    },

    linkIcon: {
        ref: getStylesRef("icon"),
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[6],
        marginRight: theme.spacing.sm,
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
            [`& .${getStylesRef("icon")}`]: {
                color: theme.fn.variant({
                    variant: "light",
                    color: theme.primaryColor,
                }).color,
            },
        },
    },
}));

const data = [
    { link: "/dashboard", label: "Dashboard", icon: IconLayoutDashboard },
    { link: "/dashboard/novel", label: "Novel", icon: IconBellRinging },
    {
        link: "/dashboard/translator",
        label: "Translator",
        icon: IconUsers,
    },
];

export function NavbarApp() {
    const { classes, cx } = useStyles();

    const location = useLocation();

    const links = data.map((item, index) => (
        <Link to={item.link} style={{ textDecoration: "none" }} key={index}>
            <div
                className={cx(classes.link, {
                    [classes.linkActive]: item.link === location.pathname,
                })}
                key={item.label}
            >
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span>{item.label}</span>
            </div>
        </Link>
    ));

    return (
        <Navbar height={700} width={{ sm: 300 }} p="md">
            <Navbar.Section grow>{links}</Navbar.Section>
        </Navbar>
    );
}
