import { useParams, Link } from 'react-router-dom';
import structures from '../data';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkMui from '@mui/material/Link';
import { Navbar } from '../components/Navbar';
import { NAV_ITEMS } from '../navItems';



function Building() {
    const { id } = useParams<{ id: string }>();
    const index = Number(id) || 0;
    const building = structures.at(index);

    if (!building) {
        return (
            <div>
                <Navbar active={-1} navItems={NAV_ITEMS} />
                <Container maxWidth="lg" sx={{ mt: 4 }}>
                    <Typography variant="h4">Здание не найдено</Typography>
                    <Link to="/">Вернуться на главную</Link>
                </Container>
            </div>
        );
    }

    return (
        <div>
            <Navbar active={-1} navItems={NAV_ITEMS} />
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
                    <LinkMui component={Link} underline="hover" color="inherit" to="/">
                        Главная
                    </LinkMui>
                    <Typography color="text.primary">{building.title}</Typography>
                </Breadcrumbs>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 4,
                    }}
                >
                    <Box
                        component="img"
                        src={building.img}
                        alt={building.title}
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            maxHeight: 500,
                            objectFit: 'cover',
                            borderRadius: 2,
                        }}
                    />
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h4" gutterBottom>
                            {building.title}
                        </Typography>
                        {building.description.map((item, ind) => (
                            <Typography
                                key={ind}
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    textAlign: 'justify',
                                    mb: 1.5,
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Building;
