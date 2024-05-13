/* eslint-disable react/display-name */
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton, Stack } from "@mui/material";
import usePagination from "@mui/material/usePagination";
import React, { Children, useState } from "react";

type CarouselProps = {
  limit?: number;
  children?: React.ReactNode;
};

/**
 * Generic Carousel Component
 *
 * - Pass content as React children
 *
 * @example
 *   <Carousel limit={3}>
 *     <div>1</div>
 *     <div>2</div>
 *   </Carousel>;
 */
export default function Carousel({ limit = 1, children }: CarouselProps) {
  const totalCount = Children.count(children) ?? 0;
  /** Page count */
  const count = parseInt(
    `${totalCount / limit + (totalCount % limit > 0 ? 1 : 0)}`,
  );

  const [page, setPage] = useState(1);
  const pageStartIndex = (page - 1) * limit;

  /** Mui Pagination hook used to get buttons */
  const { items } = usePagination({
    page,
    count,
    onChange: (_, page) => setPage(page),
  });

  /** Uses hook to create custom next & previous buttons */
  const { Previous, Next } = items.reduce(
    (result, { type }, i) => {
      const Button = (props: object) => (
        <IconButton
          sx={{
            padding: { xs: "1.25rem 0.5rem", md: "5rem 0.5rem" },
            borderRadius: 0,
            boxShadow: "none",
          }}
          key={type}
          aria-label={type}
          {...props}
        />
      );

      if (type === "previous")
        result.Previous = () => (
          <Button {...items[i]}>
            <KeyboardArrowLeftIcon />
          </Button>
        );
      else if (type === "next")
        result.Next = () => (
          <Button {...items[i]}>
            <KeyboardArrowRightIcon />
          </Button>
        );
      return result;
    },
    { Previous: () => <></>, Next: () => <></> },
  );

  return (
    <Stack direction="row" alignItems="stretch" justifyContent="space-between">
      <Previous />
      <Stack
        direction="row"
        alignSelf="center"
        alignItems="center"
        spacing={{ xs: 2, md: 8 }}
      >
        {children &&
          Children.toArray(children)
            .slice(pageStartIndex, pageStartIndex + limit)
            .map((child) => child)}
      </Stack>
      <Next />
    </Stack>
  );
}
