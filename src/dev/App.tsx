import {
  Alert,
  Avatar,
  AvatarContainer,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Divider,
  Heading,
  Input,
  InputAdornment,
  InputGroup,
  Link,
  Nav,
  NavLink,
  Page,
  Section,
  Typography,
} from "../index";
import { FiArrowLeft, FiArrowRight, FiPlus, FiSquare } from "react-icons/fi";

export const App = () => {
  return (
    <Page>
      <Nav>
        <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
          <span className="grow">
            <FiSquare size={24} />
          </span>

          <NavLink isActive href="/about">
            About
          </NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Container>
      </Nav>

      <Section>
        <Container className="space-y-4">
          <Alert status="success" title="Success alert">
            Used to give feedback to a user that an action they have just taken
            was successful.
          </Alert>
          <Alert status="info" title="Info alert">
            Used for general non-essential information.
          </Alert>
          <Alert status="warning" title="Warning alert">
            Used to make the user aware of a possible risk or change to normal
            behaviour.
          </Alert>
          <Alert status="danger" title="Danger alert">
            Used to alert a user that an action they have just taken has failed,
            or when it is essential for the user to understand that they are
            about to take an action that is destructive and irreversible.
          </Alert>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-4">
          <AvatarGroup>
            <Avatar size="sm" fallback="AB" />
            <Avatar size="sm" fallback="CD" />
            <Avatar size="sm" fallback="EF" />
            <Avatar size="sm" fallback="+5" />
          </AvatarGroup>

          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/160?img=4" fallback="AB" />
            <Avatar src="https://i.pravatar.cc/160?img=5" fallback="CD" />
            <Avatar src="https://i.pravatar.cc/160?img=6" fallback="EF" />
            <Avatar src="https://i.pravatar.cc/160?img=7" fallback="+5" />
          </AvatarGroup>

          <AvatarGroup>
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/200?img=8"
              fallback="AB"
            />
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/200?img=9"
              fallback="CD"
            />
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/200?img=10"
              fallback="EF"
            />
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/200?img=11"
              fallback="+5"
            />
          </AvatarGroup>
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-wrap gap-2">
          <Badge>Vegan</Badge>
          <Badge>Vegetarian</Badge>
          <Badge>Dairy Free</Badge>
          <Badge>Keto</Badge>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-4">
          <div className="space-x-2">
            <Button>Start</Button>
            <Button intent="secondary">Stop</Button>
            <Button intent="destructive">Cancel</Button>
          </div>
          <ButtonGroup>
            <Button intent="secondary">
              <FiArrowLeft size={20} />
            </Button>
            <Button intent="secondary">
              <FiPlus size={20} />
            </Button>
            <Button intent="secondary">
              <FiArrowRight size={20} />
            </Button>
          </ButtonGroup>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          {(["high", "low", "flat"] as const).map((elevation) => (
            <Card palette="surface" key={elevation} elevation={elevation}>
              <CardContent>
                <AvatarContainer>
                  <Avatar
                    src="https://i.pravatar.cc/160?img=12"
                    fallback="CF"
                  />
                  <div>
                    <Heading level="h3">Cat Catterson</Heading>
                    <Typography level="body" palette="weaker">
                      Head of CATering
                    </Typography>
                  </div>
                </AvatarContainer>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <Divider />
        </Container>
      </Section>

      <Section>
        <Container className="space-y-4">
          <Heading level="h1">Heading Level 1</Heading>
          <Heading level="h2">Heading Level 2</Heading>
          <Heading level="h3">Heading Level 3</Heading>

          <Heading level="h2" palette="base">
            Base Heading
          </Heading>
          <Heading level="h2" palette="weak">
            Weak Heading
          </Heading>
          <Heading level="h2" palette="weaker">
            Weaker Heading
          </Heading>
          <Heading level="h2" palette="primary">
            Primary Heading
          </Heading>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 flex-col gap-4 sm:grid-cols-2">
          <Input placeholder="example@email.com" />
          <Input defaultValue="abc" pattern="[0-9]*" />
          <Input disabled value="N/A" />
          <InputGroup>
            <InputAdornment>https://</InputAdornment>
            <Input placeholder="maxrandle.co.nz" />
          </InputGroup>
          <InputGroup className="sm:col-span-2">
            <Input />
            <InputAdornment>to</InputAdornment>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputAdornment>$</InputAdornment>
            <Input />
          </InputGroup>
          <InputGroup>
            <Input />
            <InputAdornment>kg</InputAdornment>
          </InputGroup>
        </Container>
      </Section>
    </Page>
  );
};
