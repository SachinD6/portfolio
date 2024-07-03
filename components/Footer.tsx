"use client";
import { Section, Container } from "@/components/Craft";
import { SocialIcons } from "./ui/social-icons";
import Clock from "./ui/clock";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });


  return (
    <>
      <hr className="text-neutral-800 max-w-xl mx-auto" />
      <footer className="not-prose max-w-4xl mx-auto text-center">
        <Section className="p-0 md:p-0">
          <Container className="grid gap-6">
            <div className="grid gap-6">
              <div className="flex flex-col md:flex-row mb-6 md:mb-0 gap-4 underline underline-offset-4 text-md ">
                <SocialIcons />
              </div>

              <p className="text-muted-foreground">
                ©{" "}
                <a
                  href="https://github.com/sachind6"
                  className="underline underline-offset-4"
                >
                  github/sachind6
                </a>
                . All rights reserved. 2023-{currentYear}.
              </p>
              {/* <p className="mt-4">{currentDate}</p> */}
              <Clock />
            </div>
          </Container>
        </Section>
      </footer>
    </>
  );
}
